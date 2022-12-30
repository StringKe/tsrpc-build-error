import { Random } from 'load-balancer-algorithm'

let ids: string[] = []
let random = new Random(ids)

export function addClient(id: string) {
    ids.push(id)
    ids = ids.filter((id, index) => ids.indexOf(id) === index)
    random = new Random(ids)
}

export function removeClient(id: string) {
    ids.splice(ids.indexOf(id), 1)
    random = new Random(ids)
}

export function pickClient() {
    return random.pick()
}
