module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const turnsCount = 2 ** disksNumber - 1;
    return {
        turns: turnsCount,
        seconds: turnsCount / (turnsSpeed / 3600),
    };
}