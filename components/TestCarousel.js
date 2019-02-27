import Carousel from 'react-native-snap-carousel';
import { ENTRIES1, ENTRIES2 } from '../static/dataCarousel';
import SliderEntry from './SliderEntry';

export class TestCarousel extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data : this.props.data
    };
  };

    _renderItem ({item, index}) {
        return (
          <SliderEntry
            data={item}
            even={(index + 1) % 2 === 0}
            parallax={true}
            parallaxProps={parallaxProps}
          />
        );
    }

    render () {
        return (
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={ENTRIES1}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />
        );
    }
}