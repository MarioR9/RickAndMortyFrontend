import React from 'react'
import testMap from '../assets/testMap.png'


class Canvas extends React.Component {

  
      render() {

        var coinImage = new Image();
        coinImage.src = "images/coin-sprite-animation.png";

        function sprite (options) {
				
            var that = {};
                            
            that.context = options.context;
            that.width = options.width;
            that.height = options.height;
            that.image = options.image;
        
            return that;
        }

        return(
          <div>
            <canvas 
            style={{position: 'relative',
                    top: 0,
                    left: 0,
                    width: 1000}}           
            ref="canvas" width={440} height={425} />
            <img ref="image" src={testMap} className="hidden" />
          </div>
        )
      }
    }
    export default Canvas