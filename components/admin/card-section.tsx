import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";

export default function CardSection(props: {title: string, content: string}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
            </CardHeader>
            <CardContent>
                {props.content}
                <Separator/>
                <span>Inactive</span>
                <Separator/>
                <span>Active</span>
            </CardContent>
        </Card>
    )
}