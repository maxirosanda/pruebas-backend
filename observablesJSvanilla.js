class Subject {
    constructor(){
        this.observers = []
    }
    subscribe(observerNew){
        this.observers.push(observerNew)
    }
    unsubscribe(observerDelete){
        this.observers.filter(observer => observer != observerDelete)
    }
    notify(model){
        this.observers.forEach(observer =>{
            observer.notify(model)
        })
    }
}

class TextSubject extends Subject{
    constructor(){
        super()
        this.text = ""
    }
    notify(text){
        this.text = text
        super.notify(this)
    }
}

class Div1Observer{
    notify(subject){
        document.getElementById("div1").innerHTML = subject.text
    }
}

class Div2Observer{
    notify(subject){
        document.getElementById("div2").innerHTML = subject.text.length
    }
}
const textSubject = new TextSubject()
const miDiv1 = new Div1Observer()
const miDiv2 = new Div2Observer()
textSubject.subscribe(miDiv1)
textSubject.subscribe(miDiv2)
document.getElementById("miTexto").addEventListener("input",(e)=>{
    textSubject.notify(e.target.value)
})