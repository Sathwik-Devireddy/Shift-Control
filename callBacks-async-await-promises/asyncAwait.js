function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
console.log("async start")
async function main() {
    console.log("Start");

    await delay(2000);

    console.log("After 2 seconds");

    console.log("End");
}
console.log("out of async")
main();