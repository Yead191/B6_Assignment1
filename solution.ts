const formatValue = (value:string|number|boolean):(string | number|boolean)=>{
    if(typeof value =="string"){
        return value.toUpperCase()
    }
    else if(typeof value=="number"){
        return value*10
    }
    else {
        return !value
    }
}




const getLength = (value: string | any[]): number => {
  if (typeof value == "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  } else return 0;
};





class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}





type ratingProps = {
  title: string;
  rating: number;
};
const filterByRating = (values: ratingProps[]):ratingProps[] => {
  const filterData= values.filter((val) => val.rating > 4);
  return filterData
};





type IUser = {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (values: IUser[]): IUser[] => {
  const activeUsers = values.filter((val) => val.isActive);
  return activeUsers;
};





interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (values: Book): string => {
  const bookDetails = `Title: ${values.title}, Author: ${
    values.author
  }, Published: ${values.publishedYear}, Available: ${
    values.isAvailable ? "Yes" : "No"
  }`;
  return bookDetails;
};





const getUniqueValues = (
  arr1: (string | number)[],
  arr2: (string | number)[]
) => {
  let finalArray: (number | string)[] = [];

  function isExist(value: number | string) {
    for (let val of finalArray) {
      if (val == value) {
        return true;
      }
    }

    return false;
  }

  for (let val of arr1) {
    if (!isExist(val)) {
      finalArray.push(val);
    }
  }

  for (let val of arr2) {
    if (!isExist(val)) {
      finalArray.push(val);
    }
  }

  return finalArray;
};





type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]) => {
  return products.reduce((prev, curr) => {
    const price = curr.price * curr.quantity;
    return prev + (price - price * ((curr.discount ?? 0) / 100));
  }, 0);
};
