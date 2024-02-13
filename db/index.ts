import mongoose from "mongoose";
declare global {
  var mongoose: any; // This must be a `var` and not a `let / const`
}

const MONGODB_URI = process.env.MONGODB_URL as string;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connect() {
  if (cached.conn) {
    if (process.env.NODE_ENV === "development")
      console.log("connection cached");
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {};
    if (process.env.NODE_ENV === "development")
      console.log("new connection called");
    cached.promise = await mongoose.connect(MONGODB_URI, opts);
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connect;
