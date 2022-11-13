const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(){
    cats.push("Ralph")
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(Ralph){
    var append=[...cats, Ralph]
    return append
}
function prependCat(Ralph){
    var prepend=[Ralph, ...cats]
    return prepend
}
function removeLastCat(){
    var lastcat=cats.slice(0, cats.length - 1)
    return lastcat
}
function removeFirstCat(){
    var firstcat=cats.slice(1)
    return firstcat
}