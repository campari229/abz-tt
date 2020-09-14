// const href = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5'

export const getUsers = async (number) => {
  const response = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${number}`);
  
  const x = response.json()
  console.log(x)
  return x
}
