import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView, TouchableHighlight } from 'react-native'
import Like from './component/Like'
import DissLike from './component/DissLike'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
        icon : require("./component/assets/like.png"),
        icon2 : require("./component/assets/disslike.png")
    }
  }
  
  test = []
  panjang = 10
  lebar = 10
  count = 0
  x = 0
  y = 0

  changeIcon = () => {
    this.setState({icon : require("./component/assets/disslike.png")})
    // let test = []
    // const panjang = 10
    // const lebar = 10
    // let count = 0
    // let x = 0
    // let y = 0
    // for(x=1; x<=panjang; x++) {
		// 	for(y=1; y<=lebar; y++) {
		// 		count++;
		// 		let countTemp = 0;
		// 		for(let z = 1; z <= count; z++) {
		// 			if(count % z == 0) {
		// 				countTemp++;
		// 			}
		// 		}
		// 		if(countTemp == 2) {
		// 			this.test.push(<TouchableOpacity onPress={this}>
    //         <DissLike/>
    //       </TouchableOpacity>);
		// 		}/*
    //     else if(countTemp != 2) {
		// 			this.test.push(<TouchableOpacity onPress={this.changeIcon}>
    //         <Like/>
    //       </TouchableOpacity>);
		// 		}*/
    //     else{
    //       this.test.push(<TouchableOpacity onPress={this}>
    //         <Like/>
    //       </TouchableOpacity>);
    //     }
		// 	}
    // }
  }

  render() {
    // const ruang = this.panjang * this.lebar
    // for(let z = 0; z <= ruang; z++) {
    //   this.test.push(<TouchableOpacity onPress={this.changeIcon}>
    //     <Like/>
    //   </TouchableOpacity>);
    // }
    // let test = []
    const panjang = 10
    const lebar = 10
    let count = 0
    let x = 0
    let y = 0
    for(x=1; x<=panjang; x++) {
			for(y=1; y<=lebar; y++) {
				count++;
				let countTemp = 0;
				for(let z = 1; z <= count; z++) {
					if(count % z == 0) {
						countTemp++;
					}
				}
				if(countTemp == 2) {
					this.test.push(<TouchableOpacity onPress= {this.changeIcon}>
            <DissLike icon = {this.state.icon} />
          </TouchableOpacity>);
				}/*
        else if(countTemp != 2) {
					this.test.push(<TouchableOpacity onPress={this.changeIcon}>
            <Like/>
          </TouchableOpacity>);
				}*/
        else{
          this.test.push(<TouchableOpacity onPress={}>
            <Like/>
          </TouchableOpacity>);
        }
			}
    }
    return (
      <View>
        <ScrollView>
          <Text>{this.test}</Text>
        </ScrollView>
        {/* <TouchableOpacity onPress={this.changeIcon}>
          <Like icon = {this.state.icon} />
        </TouchableOpacity> */}
      </View>
    );
  }
}

export default App;