import os from 'os'
const nets = os.networkInterfaces()
let address = ''

export function getIpAddress() {
    if (address) {
        return address
    }
    Object.keys(nets).forEach(item => {
        if (address) {
            return
        }
        if (item.startsWith('en')) {
            const netI = nets[item]
            if (netI) {
                for (let netIf of netI) {
                    if (netIf.family === 'IPv4') {
                        address = netIf.address
                        return
                    }
                }
            }
        }
    })
    return address
}
