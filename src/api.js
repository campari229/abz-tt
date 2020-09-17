// const href = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5'

export const loadUsers = async (number) => {
  const response = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${number}`);  
  const result = response.json()

  return result
}

export const getToken = async () => {
  const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token');
  const result = await response.json()

  return result.token
}

export const getPositions = async () => {
  const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions');
  const result = await response.json()

  return result.positions
}

export const sendFormData = async (formData) => {
  const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
    method: 'Post',
    body: formData,
    headers: {'Token': await getToken()}
  })

  const result = response.json();
  return result;
}
