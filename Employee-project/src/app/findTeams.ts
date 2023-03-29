import * as moment from 'moment';


export function findTeams(data:any) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
        let employee = data[i];
        for (let j = i + 1; j < data.length; j++) {
            let nextEmployee = data[j];

            if (employee.ProjectID === nextEmployee.ProjectID) {
                
                let getEmployeeStartDay = new Date(moment(employee.DateFrom).format().slice(0, 10));
                let getEmployeeEndDay = new Date(moment(employee.DateTo).format().slice(0, 10));
                let nextEmployeeStartDay = new Date(moment(nextEmployee.DateFrom).format().slice(0, 10));
                let nextEmployeeEndDay = new Date(moment(nextEmployee.DateTo).format().slice(0, 10));

                if (Number(getEmployeeStartDay) > + nextEmployeeStartDay && + getEmployeeEndDay < + nextEmployeeEndDay && + nextEmployeeStartDay < + getEmployeeEndDay) {
                    const equalDays = getsDays(getEmployeeStartDay, getEmployeeEndDay);
                    let obj = {
                        'EmpID1': employee.EmpID,
                        'EmpID2': nextEmployee.EmpID,
                        'ProjectID': nextEmployee.ProjectID,
                        'equalDays': equalDays
                    };
                    result.push(obj);

                } else if (Number(getEmployeeStartDay) > + nextEmployeeStartDay && + getEmployeeEndDay < + nextEmployeeEndDay && + nextEmployeeStartDay < + getEmployeeEndDay) {
                    const equalDays = getsDays(getEmployeeStartDay, getEmployeeEndDay);


                    let obj = {
                        'EmpID1': employee.EmpID,
                        'EmpID2': nextEmployee.EmpID,
                        'ProjectID': nextEmployee.ProjectID,
                        'equalDays': equalDays
                    };
                    result.push(obj);

                }
                else if (Number(getEmployeeStartDay) < + nextEmployeeStartDay && + getEmployeeEndDay < + nextEmployeeEndDay && + getEmployeeEndDay > + nextEmployeeStartDay) {
                    const equalDays = getsDays(nextEmployeeStartDay, getEmployeeEndDay);

                    let obj = {
                        'EmpID1': employee.EmpID,
                        'EmpID2': nextEmployee.EmpID,
                        'ProjectID': nextEmployee.ProjectID,
                        'equalDays': equalDays
                    };
                    result.push(obj);
                }
                else if (Number(getEmployeeStartDay) > + nextEmployeeStartDay && + getEmployeeEndDay > + nextEmployeeEndDay) {
                    const equalDays = getsDays(getEmployeeStartDay, nextEmployeeEndDay);
                    let obj = {
                        'EmpID1': employee.EmpID,
                        'EmpID2': nextEmployee.EmpID,
                        'ProjectID': nextEmployee.ProjectID,
                        'equalDays': equalDays
                    };
                    result.push(obj);
                }
                else if (Number(getEmployeeStartDay) < + nextEmployeeStartDay && + getEmployeeEndDay < +nextEmployeeEndDay && + getEmployeeEndDay > +nextEmployeeStartDay) {
                    const equalDays = getsDays(nextEmployeeStartDay, getEmployeeEndDay);
                    let obj = {
                        'EmpID1': employee.EmpID,
                        'EmpID2': nextEmployee.EmpID,
                        'ProjectID': nextEmployee.ProjectID,
                        'equalDays': equalDays
                    };
                    result.push(obj);
                }
                else if (Number(getEmployeeStartDay) === + nextEmployeeStartDay && + getEmployeeEndDay > + nextEmployeeEndDay) {
                    const equalDays = getsDays(nextEmployeeEndDay, nextEmployeeStartDay);
                    let obj = {
                        'EmpID1': employee.EmpID,
                        'EmpID2': nextEmployee.EmpID,
                        'ProjectID': nextEmployee.ProjectID,
                        'equalDays': equalDays
                    };
                    result.push(obj);
                }
                else if (Number(getEmployeeStartDay) === + nextEmployeeStartDay && + getEmployeeEndDay < + nextEmployeeEndDay) {
                    const equalDays = getsDays(getEmployeeEndDay, nextEmployeeStartDay);
                    let obj = {
                        'EmpID1': employee.EmpID,
                        'EmpID2': nextEmployee.EmpID,
                        'ProjectID': nextEmployee.ProjectID,
                        'equalDays': equalDays
                    };
                    result.push(obj);
                }
                else if (Number(getEmployeeStartDay) > + nextEmployeeStartDay && + getEmployeeEndDay === + nextEmployeeEndDay) {
                    const equalDays = getsDays(getEmployeeStartDay, getEmployeeEndDay);
                    let obj = {
                        'EmpID1': employee.EmpID,
                        'EmpID2': nextEmployee.EmpID,
                        'ProjectID': nextEmployee.ProjectID,
                        'equalDays': equalDays
                    };
                    result.push(obj);
                }
                else if (Number(getEmployeeStartDay) < + nextEmployeeStartDay && + getEmployeeEndDay === + nextEmployeeEndDay) {
                    const equalDays = getsDays(nextEmployeeStartDay, getEmployeeEndDay);
                    let obj = {
                        'EmpID1': employee.EmpID,
                        'EmpID2': nextEmployee.EmpID,
                        'ProjectID': nextEmployee.ProjectID,
                        'equalDays': equalDays
                    };
                    result.push(obj);
                }

                else if (Number(getEmployeeStartDay) === + nextEmployeeStartDay && + getEmployeeEndDay === + nextEmployeeEndDay) {
                    const equalDays = getsDays(nextEmployeeStartDay, getEmployeeEndDay);
                    let obj = {
                        'EmpID1': employee.EmpID,
                        'EmpID2': nextEmployee.EmpID,
                        'ProjectID': nextEmployee.ProjectID,
                        'equalDays': equalDays
                    };
                    result.push(obj);
                }
            }
        }
    }
   return result.sort((first, second)=>(second.equalDays - first.equalDays))             
      
}

function getsDays(d1:any, d2:any) {

    const getTime = Math.abs(d2 - d1);
    const getEgualDays = Math.ceil(getTime / (1000 * 60 * 60 * 24));

    return getEgualDays;
}