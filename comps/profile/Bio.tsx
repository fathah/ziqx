const Bio = ({user}:{user:any}) => {
    return (
        <main>
            {
    user.bio && user.bio.length>0 && <div className="py-4 border-b">
        <div className="text-xs text-gray-400">Bio</div>
        <div className="text-sm text-gray-600">{user.bio}</div></div>

}
        </main>
    );
}

export default Bio;