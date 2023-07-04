import dbConn from "@/utils/dbConn";
import Contact from "@/models/contact";
import {NextResponse} from "next/server";

export async function POST(req, res) {

    try {

        const data = await req.json();
        await dbConn();

        await Contact.create(data);

        return NextResponse.json({
            message: "Message Sent Successfully."
        }, {
            status: 200
        })

    } catch (e) {

        return NextResponse.json({
            message: "Server Error, Please Try Again."
        }, {
            status: 500
        })

    }

}