var shopCart = {
    mouse: '2',
    keyborad: '3',
    monitor: '4',
    cpu: '1',
    gpu: '1',
    pc: '1'
}
var size = Object.keys(shopCart).length;
for (var i = 0; i > size; i++){
    console.log(shopCart[i])
}