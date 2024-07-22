import { useState } from "react";
import Navbar from "../components/navbar";
import useCreateFolder from "../hooks/useCreateFolder";

const HomePage = () => {
    const [newFolder, setNewFolder] = useState("");
    const [showCreateFolder, setShowCreateFolder] = useState(false);
    const { createFolder } = useCreateFolder();

    const handleAllowCreateFolder = () => {
        setShowCreateFolder(true);
    };

    const handleCreateFolder = () => {
        if (newFolder.length > 0) {
            createFolder({ name: newFolder });
        }
    };

    return (
        <div>
            <Navbar />
            <div className="homepage-main-container">
                <h3>Welcome to Cloud Home</h3>
                <button onClick={handleAllowCreateFolder}>Create Folder</button>
                <button>Upload File</button>
                <h4>Cloud Home</h4>
                <div>
                    {showCreateFolder && (
                        <div style={{ margin: "24px", padding: "24px", backgroundColor: "yellow" }}>
                            <input value={newFolder} onChange={(e) => setNewFolder(e.target.value)} />
                            <button onClick={handleCreateFolder}>Create</button>
                            <button onClick={() => setShowCreateFolder(false)}>Cancel</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
