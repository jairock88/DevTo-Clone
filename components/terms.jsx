import Link from "next/link";

export default function Terms() {
  return (
    <p className="mt-4 text-center text-xs italic text-gray-600">
      By signing in, you are agreeing to our{" "}
      <Link href="#" className="text-blue-600 hover:underline">
        privacy policy,
      </Link>
      <Link href="#" className="text-blue-600 hover:underline">
        terms of use
      </Link>{" "}
      and{" "}
      <Link href="#" className="text-blue-600 hover:underline">
        code of conduct.
      </Link>
    </p>
  );
}
