import { useRouter } from "next/router";

export default function handler(req, res) {
    const router = useRouter();
    router.push('/result');
}