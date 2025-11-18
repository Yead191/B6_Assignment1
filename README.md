Q.1 TypeScript-এ Interface এবং Type এর পার্থক্য

TypeScript-এ interface এবং type দুটোই ডেটার গঠন নির্ধারণ করতে ব্যবহৃত হয়। তবে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে।


Interface সহজে extend করা যায়:

interface User {
  name: string;
}
interface Admin extends User {
  role: string;
}


Type-ও extend করা যায়, তবে intersection ব্যবহার করতে হয়:

type User = { name: string };
type Admin = User & { role: string };


একই নামে একাধিক interface লিখলে সেগুলো merge হয়ে যায়।
Type-এর ক্ষেত্রে একই নামে আবার ঘোষণা দিলে error হয়।


Type বেশি flexible—primitive, union, tuple, function type ইত্যাদি ধারণ করতে পারে।
Interface মূলত object structure নির্ধারণে ব্যবহৃত হয়।


##
Q.4 TypeScript-এ Enum এর ব্যবহার

Enum হলো related constant মানগুলোকে একটি গ্রুপে রাখার উপায়। এটি কোডকে আরও readable করে এবং ভুল মান ব্যবহার কমায়।

Numeric Enum উদাহরণ
enum Direction {
  Up,
  Down,
  Left,
  Right
}

String Enum উদাহরণ
enum Status {
  Success = "SUCCESS",
  Failed = "FAILED",
  Pending = "PENDING"
}