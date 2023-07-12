export const formatDate = (logs) => {
    const formattedLogs = logs.map(log => {
       let result = log.date.replace(/T|Z/g, ' ');
       log.date = result.trim();

        return log;
    });

    return formattedLogs;
}
