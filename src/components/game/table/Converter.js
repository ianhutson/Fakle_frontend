import { connect } from 'react-redux'

const convertToValue = () => {
    const sorted = this.props.settings.settings.selection_array.sort()
    const split = sorted.join(', ')
    //basic values
    if (split === '1') return 10
    else if (split === '5') return 5
    //triplets
    else if (split === '1, 1, 1') return 10
    else if (split === '2, 2, 2') return 20
    else if (split === '3, 3, 3') return 30
    else if (split === '4, 4, 4') return 40
    else if (split === '5, 5, 5') return 50
    else if (split === '6, 6, 6') return 60
    //triplets + one offs
    else if (split === '1, 1, 1, 1') return 20
    else if (split === '1, 2, 2, 2') return 30
    else if (split === '1, 3, 3, 3') return 40
    else if (split === '1, 4, 4, 4') return 50
    else if (split === '1, 5, 5, 5') return 60
    else if (split === '1, 6, 6, 6') return 70
    else if (split === '1, 1, 1, 5') return 15
    else if (split === '1, 2, 2, 2') return 25
    else if (split === '1, 3, 3, 3') return 35
    else if (split === '1, 4, 4, 4') return 45
    else if (split === '5, 5, 5, 5') return 55
    else if (split === '5, 6, 6, 6') return 65
    else if (split === '5, 6, 6, 6') return 65
    else if (split === '1, 1, 1, 5, 5') return 40
    else if (split === '1, 1, 5, 5, 5') return 35
    else if (split === '1, 5') return 15
    else if (split === '1, 1') return 20
    else if (split === '5, 5') return 10
    else if (split === '1, 1, 5') return 25
    else if (split === '1, 5, 5') return 20
    else if (split === '1, 1, 5, 5') return 30
    // straight
    else if (split === '1, 2, 3, 4, 5, 6') return 300
    // two triplets
    else if (split === '1, 1, 1, 2, 2, 2') return 250
    else if (split === '1, 1, 1, 3, 3, 3') return 250
    else if (split === '1, 1, 1, 4, 4, 4') return 250
    else if (split === '1, 1, 1, 5, 5, 5') return 250
    else if (split === '1, 1, 1, 6, 6, 6') return 250
    else if (split === '2, 2, 2, 3, 3, 3') return 250
    else if (split === '2, 2, 2, 4, 4, 4') return 250
    else if (split === '2, 2, 2, 5, 5, 5') return 250
    else if (split === '2, 2, 2, 6, 6, 6') return 250
    else if (split === '3, 3, 3, 4, 4, 4') return 250
    else if (split === '3, 3, 3, 5, 5, 5') return 250
    else if (split === '3, 3, 3, 6, 6, 6') return 250
    else if (split === '4, 4, 4, 5, 5, 5') return 250
    else if (split === '4, 4, 4, 6, 6, 6') return 250
    else if (split === '5, 5, 5, 6, 6, 6') return 250
    // 3 pairs
    else if (split === '1, 1, 2, 2, 3, 3') return 150
    else if (split === '1, 1, 2, 2, 4, 4') return 150
    else if (split === '1, 1, 2, 2, 5, 5') return 150
    else if (split === '1, 1, 2, 2, 6, 6') return 150
    else if (split === '1, 1, 3, 3, 4, 4') return 150
    else if (split === '1, 1, 3, 3, 5, 5') return 150
    else if (split === '1, 1, 3, 3, 6, 6') return 150
    else if (split === '1, 1, 4, 4, 5, 5') return 150
    else if (split === '1, 1, 4, 4, 6, 6') return 150
    else if (split === '1, 1, 5, 5, 6, 6') return 150
    else if (split === '2, 2, 3, 3, 4, 4') return 150
    else if (split === '2, 2, 3, 3, 5, 5') return 150
    else if (split === '2, 2, 3, 3, 6, 6') return 150
    else if (split === '2, 2, 4, 4, 5, 5') return 150
    else if (split === '2, 2, 4, 4, 6, 6') return 150
    else if (split === '2, 2, 5, 5, 6, 6') return 150
    else if (split === '3, 3, 4, 4, 5, 5') return 150
    else if (split === '3, 3, 4, 4, 6, 6') return 150
    else if (split === '3, 3, 5, 5, 6, 6') return 150
    else if (split === '4, 4, 5, 5, 6, 6') return 150
    // full house
    else if (split === '1, 1, 1, 1, 2, 2') return 150
    else if (split === '1, 1, 1, 1, 3, 3') return 150
    else if (split === '1, 1, 1, 1, 4, 4') return 150
    else if (split === '1, 1, 1, 1, 5, 5') return 150
    else if (split === '1, 1, 1, 1, 6, 6') return 150
    else if (split === '1, 1, 2, 2, 2, 2') return 150
    else if (split === '1, 1, 3, 3, 3, 3') return 150
    else if (split === '1, 1, 4, 4, 4, 4') return 150
    else if (split === '1, 1, 5, 5, 5, 5') return 150
    else if (split === '1, 1, 6, 6, 6, 6') return 150
    else if (split === '2, 2, 2, 2, 3, 3') return 150
    else if (split === '2, 2, 2, 2, 4, 4') return 150
    else if (split === '2, 2, 2, 2, 5, 5') return 150
    else if (split === '2, 2, 2, 2, 6, 6') return 150
    else if (split === '2, 2, 3, 3, 3, 3') return 150
    else if (split === '2, 2, 4, 4, 4, 4') return 150
    else if (split === '2, 2, 5, 5, 5, 5') return 150
    else if (split === '2, 2, 3, 6, 6, 6') return 150
    else if (split === '3, 3, 3, 3, 4, 4') return 150
    else if (split === '3, 3, 3, 3, 5, 5') return 150
    else if (split === '3, 3, 4, 4, 4, 4') return 150
    else if (split === '3, 3, 5, 5, 5, 5') return 150
    else if (split === '3, 3, 6, 6, 6, 6') return 150
    else if (split === '4, 4, 4, 4, 5, 5') return 150
    else if (split === '4, 4, 4, 4, 6, 6') return 150
    else if (split === '4, 4, 5, 5, 5, 5') return 150
    else if (split === '4, 4, 6, 6, 6, 6') return 150
    else if (split === '5, 5, 6, 6, 6, 6') return 150
    else if (split === '5, 5, 5, 5, 6, 6') return 150
    else return '-'

  }

  export default connect()(convertToValue)