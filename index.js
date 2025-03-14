// code your solution here
function superbowlWin(record) {
    return record.find((obj) => obj.result === "W") ? record.find((obj) => obj.result === "W").year : undefined;
}
