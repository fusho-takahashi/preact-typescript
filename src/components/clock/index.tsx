import { h, Component } from 'preact';

export default class Clock extends Component {
  state = { time: Date.now() };
  timer: NodeJS.Timeout | null = null;

  componentDidMount(): void {
    if (this.timer !== null) return;
    this.timer = setInterval(() => {
      this.setState({ time: Date.now() });
    }, 1000);
  }

  componentWillUnmount(): void {
    if (this.timer === null) return;
    clearInterval(this.timer);
  }

  render(): h.JSX.Element {
    const time = new Date(this.state.time).toLocaleTimeString();
    return <span>{time}</span>;
  }
}
