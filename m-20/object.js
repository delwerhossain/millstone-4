var shopCart = {
    mouse: 2,
    keyborad: 3,
    monitor: 4,
    cpu: 1,
    gpu: 1,
    pc: 1
}
function object() {

    let value = Object.values(shopCart);
    let key = Object.keys(shopCart);
    let len = key.length
    console.log(len)
    let total = 0
    // console.log(size.length)
    for (let i = 0; i < len; i++) {
        // console.log(key[i],value[i])
        // total = total + size[i];

    }
    // return total
}
object();