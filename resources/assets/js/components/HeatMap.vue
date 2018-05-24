<style scoped>
  @import 'http://cache.amap.com/lbs/static/main1119.css';
</style>
<template>
<div id="container" class="container"></div>


</template>
<script src="http://webapi.amap.com/loca?key=ee250a0046ba5e1cbb060277414f8c71"></script>
<script src="http://a.amap.com/Loca/static/mock/heatmapData.js"></script>
<script>
	export default {
		methods:{
			initMap(){
				var map = Loca.create('container', {
        features: ['bg', 'road'],
        center: [116.397475, 39.908668],
        zoom: 10
    });

    var layer = Loca.visualLayer({
        container: map,
        type: 'heatmap',
        shape: 'normal'
    });

    var list = [];
    var i = -1, length = heatmapData.length;
    while (++i < length) {
        var item = heatmapData[i];
        list.push({
            coordinate: [item.lng, item.lat],
            count: item.count
        })
    }

    layer.setData(list, {
        lnglat: 'coordinate',
        value: 'count'
    });

    layer.setOptions({
        style: {
            radius: 25,
            opacity: [0, 0.7],
        },
        gradient: {
            0.5: 'blue',
            0.65: 'rgb(117,211,248)',
            0.7: 'rgb(0, 255, 0)',
            0.9: '#ffea00',
            1.0: 'red'
        }
    });

    layer.render();

			}
		},
		mounted(){
			this.initMap()
		}
	}
</script>
