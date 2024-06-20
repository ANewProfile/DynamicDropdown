export default function Home({
    items: string
}) {
    return <main>
        <form action="GET">
            <fieldset>
                <select id="broad" name="broad" required defaultValue={"-"}>
                    <option value="-" disabled>Choose an option</option>
                    <option value="asian">Asian</option>
                    <option value="mediterranean">Mediterranean</option>
                    <option value="american">American</option>
                    <option value="any">Any</option>
                </select>
            </fieldset>
        </form>
    </main>
}