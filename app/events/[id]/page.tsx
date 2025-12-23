interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default async function EventPage({ params }: Props) {
    const { id } = await params;

    return (
        <div>
            <h1>Event: {id}</h1>
            <p>This is the detail page for {id}</p>
        </div>
    );
}