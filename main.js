function start() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundclassofier('https://teachablemachine.withgoogle.com/models/Mn40yqn4M/model.json', modelready);
}

function modelready() {
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    console.log('got Results');

}