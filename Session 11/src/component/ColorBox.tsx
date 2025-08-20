import { Component } from 'react'

interface Props {
  color: string;
}
export default class ColorBox extends Component<Props> {
  render() {
    const { color } = this.props;
    const boxStyle = {
      width: "200px",
      height: "200px",
      backgroundColor: color,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
    };
    return <div style={boxStyle}>Box</div>;
  }
}

// export default class ColorBox extends Component {
//   render() {
//     return (
//       <div>
//         <div style={{display: 'flex', gap: '5vh'}}>
//             <div>
//                 <div className='Box' id='Red'>Box</div>
//                 <button>Red</button>
//             </div>
//             <div>
//                 <div className='Box'>Box</div>
//                 <button>Blue</button>
//             </div>
//             <div>
//                 <div className='Box'>Box</div>
//                 <button>Green</button>
//             </div>
//         </div>
//       </div>
//     )
//   }
// }
