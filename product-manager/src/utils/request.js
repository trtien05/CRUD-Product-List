const DOMAIN = 'http://localhost:3002/';

export const get = async (path) => {
  const respone = await fetch(DOMAIN + path);
  const result = await respone.json();
  return result;
}

export const post = async (path, options) => {
  const respone = await fetch(DOMAIN + path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(options)
  });
  // kết quả trả về 
  const result = await respone.json();
  return result;
}

export const patch = async (path, options) => {
  const respone = await fetch(DOMAIN + path, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(options)
  });
  // kết quả trả về 
  const result = await respone.json();
  return result
}

export const del = async (path) => {
  const respone = await fetch(DOMAIN + path, {
    method: 'DELETE',

  });
  // kết quả trả về 
  const result = await respone.json();
  return result;
}