const StatHistory = {
  template: '#stat-history-template',
  props: {
    points: { type: Array, required: true },
    monthly: Boolean,
    language: String,
    label: String,
    theme: String
  },
  data() {
    return { selectedIndex: null, resizeObserver: null };
  },
  computed: {
    timeline() {
      return this.points.map(point => Date.parse(point.date));
    },
    formatter() {
      return new Intl.NumberFormat(this.language);
    },
    dayFormat() {
      return new Intl.DateTimeFormat(this.language, { day: 'numeric', month: 'short', timeZone: 'UTC' });
    },
    dateFormat() {
      return new Intl.DateTimeFormat(this.language, { dateStyle: 'medium', timeZone: 'UTC' });
    },
    caption() {
      if (this.selectedIndex !== null) {
        const index = this.selectedIndex;
        return this.dayFormat.format(this.timeline[index]) + ' · ' + this.formatter.format(this.points[index].value);
      }
      const first = this.timeline[0];
      const last = this.timeline.at(-1);
      if (!this.monthly) return this.dayFormat.formatRange(first, last);
      const monthFormat = new Intl.DateTimeFormat(this.language, { month: 'short', timeZone: 'UTC' });
      const monthLabel = (date, point) => monthFormat.format(date) + ' ' + point.date.slice(2, 4);
      return monthLabel(first, this.points[0]) + ' – ' + monthLabel(last, this.points.at(-1));
    },
    description() {
      return this.label + ' · ' + this.points.map((point, index) =>
        this.dateFormat.format(this.timeline[index]) + ' · ' + this.formatter.format(point.value)
      ).join('\n');
    }
  },
  watch: {
    points() {
      this.selectedIndex = null;
      this.draw();
    },
    selectedIndex: 'draw',
    theme: 'draw'
  },
  mounted() {
    this.resizeObserver = new ResizeObserver(this.draw);
    this.resizeObserver.observe(this.$refs.plot);
    this.draw();
  },
  beforeUnmount() {
    this.resizeObserver.disconnect();
  },
  methods: {
    draw() {
      const canvas = this.$refs.plot;
      const { width, height } = canvas.getBoundingClientRect();
      if (!width || !height) return;

      const scale = window.devicePixelRatio;
      canvas.width = Math.round(width * scale);
      canvas.height = Math.round(height * scale);
      const context = canvas.getContext('2d');
      if (!context) return;
      context.scale(scale, scale);
      context.strokeStyle = context.fillStyle = getComputedStyle(canvas).color;
      context.lineWidth = 1.5;
      context.lineJoin = context.lineCap = 'round';

      const padding = 3;
      const values = this.points.map(point => point.value);
      const low = Math.min(...values);
      const spread = Math.max(...values) - low;
      const first = this.timeline[0];
      const duration = this.timeline.at(-1) - first;
      const coordinates = values.map((value, index) => ({
        x: padding + (width - padding * 2) * (this.timeline[index] - first) / duration,
        y: spread ? height - padding - (height - padding * 2) * (value - low) / spread : height / 2
      }));

      context.beginPath();
      context.moveTo(coordinates[0].x, coordinates[0].y);
      for (const point of coordinates.slice(1)) context.lineTo(point.x, point.y);
      context.stroke();
      const dot = coordinates[this.selectedIndex ?? coordinates.length - 1];
      context.beginPath();
      context.arc(dot.x, dot.y, this.selectedIndex === null ? 1.8 : 2.6, 0, Math.PI * 2);
      context.fill();
    },
    inspect(event) {
      const { left, width } = this.$refs.plot.getBoundingClientRect();
      const first = this.timeline[0];
      const fraction = (event.clientX - left) / width;
      const date = first + fraction * (this.timeline.at(-1) - first);
      this.selectedIndex = this.timeline.reduce((nearest, time, index) =>
        Math.abs(time - date) < Math.abs(this.timeline[nearest] - date) ? index : nearest, 0
      );
    }
  }
};
