import ga from 'react-ga';
ga.initialize('UA-46423540-1');

class Interaction {
  constructor(props) {
    this.props = props;
  }
  publish() {
    throw new Error('publish function must be overridden');
  }
}

class PageViewInteraction extends Interaction {
  constructor(props) {
    super(props)
  }
  publish() {
    ga.pageview(this.props.path);
  }
}

class CustomEventInteraction extends Interaction {
  constructor(props) {
    super(props)
  }
  publish() {
    ga.event(this.props.event);
  }
}

export {
  PageViewInteraction,
  CustomEventInteraction
};
