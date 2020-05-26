// Your code here
let createEmployeeRecord = function(ele) {
    return {
        firstName: ele[0],
        familyName: ele[1],
        title: ele[2],
        payPerHour: ele[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(employeeEleInfo) {
    return employeeEleInfo.map(function(ele) {
        return createEmployeeRecord(ele)
    })
}

let createTimeInEvent = function(employee, dateTime) {
    let [date, hour] = dateTime.split(' ')
    employee.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date,
    })

    return employee
}

let createTimeOutEvent = function(employee, dateTime) {
    let [date, hour] = dateTime.split(' ')
    employee.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date,
    })

    return employee
}