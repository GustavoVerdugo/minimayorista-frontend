export default function handler(req, res) {
    res.status(200).redirect(307, "/result");
}