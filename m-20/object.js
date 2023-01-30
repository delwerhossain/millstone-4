var shopCart = {
    mouse: '2',
    keyborad: '3',
    monitor: '4',
    cpu: '1',
    gpu: '1',
    pc: '1'
}
const size = Object.keys(shopCart);
console.log(size)
for (var i = 0; i < size.length; i++) {
    console.log(shopCart[i])
}