export async function getByCPF(cpf) {
  try {
    const response = await fetch(`http://localhost:5000/employee?cpf=${cpf}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
export async function getByName(name) {
  try {
    const response = await fetch(`http://localhost:5000/employee?name=${name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function getByJobTitle(jobTitle) {
  try {
    const response = await fetch(
      `http://localhost:5000/employee?jobTitle=${jobTitle}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function getByStatus(status) {
  try {
    const response = await fetch(
      `http://localhost:5000/employee?status=${status}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function getBySalary(salary) {
  try {
    const response = await fetch(
      `http://localhost:5000/employee?salary=${salary}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function getByDate(date) {
  try {
    const response = await fetch(`http://localhost:5000/employee?date=${date}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function getByState(state) {
  try {
    const response = await fetch(
      `http://localhost:5000/employee?state=${state}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
