function wrapInArray<T>(item: T): T[] {
    return [item]
}

wrapInArray("masala")
wrapInArray(32)
wrapInArray({flavor: "Ginger"})

console.log(wrapInArray);

function pair<A, B>(a: A, b: B): [A, B]{
    return [a, b]
}

pair("masala", "test")
pair("masala", {flavor: "Ginger"})
pair("masala", 20)

interface Box<T> {
    content: T
}

const numberBox: Box<number> = {content: 10}
const numberBoxCup: Box<string> = {content: "10"}

interface ApiPromise<T>{
    status: number,
    data: T
}

const res: ApiPromise<{flavor: string}> = {
    status: 200,
    data: {flavor: "masala"}
}