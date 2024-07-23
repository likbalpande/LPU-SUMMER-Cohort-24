import { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";
import useCreateFolder from "../hooks/useCreateFolder";
import useGetFileFolders from "../hooks/useGetFileFolders";
import useUploadFile from "../hooks/useUploadFile";

const HomePage = () => {
    const [newFolder, setNewFolder] = useState("");
    const inputRef = useRef(null);
    const [showCreateFolder, setShowCreateFolder] = useState(false);
    const { createFolder } = useCreateFolder();
    const [folderStructure, setFolderStructure] = useState([{ _id: null, name: "Cloud Home" }]);
    const { getFileFolders, fileFolders } = useGetFileFolders();

    const parentFolder = folderStructure[folderStructure.length - 1];

    const handleDoubleClick = (elem) => {
        if (elem.type == "folder") {
            setFolderStructure([...folderStructure, elem]);
        } else {
            window.open(elem.link);
        }
    };

    const handleAllowCreateFolder = () => {
        setShowCreateFolder(true);
    };

    const handleCreateFolder = async () => {
        if (newFolder.length > 0) {
            await createFolder({
                name: newFolder,
                parentId: parentFolder._id,
            });
            getFileFolders(parentFolder._id);
            setShowCreateFolder(false);
        }
    };

    useEffect(() => {
        getFileFolders(parentFolder._id);
    }, [folderStructure]);

    const handleBackClick = (clickIdx) => {
        const newFolderStructure = folderStructure.filter((elem, idx) => idx <= clickIdx);
        setFolderStructure(newFolderStructure);
    };
    //-----------------------------------------------------------------------
    const { isUploadAllowed, uploadFile } = useUploadFile();
    const handleFileUpload = async (e) => {
        if (isUploadAllowed) {
            const file = e.target.files;
            await uploadFile({
                file: file[0],
                parentId: parentFolder._id,
            });
            getFileFolders(parentFolder._id);
        } else {
            alert("Uploading is already in progress. Please wait...");
        }
    };
    //-----------------------------------------------------------------------
    return (
        <div>
            <Navbar />
            <div className="homepage-main-container">
                <h3>Welcome to Cloud Home</h3>
                <button onClick={handleAllowCreateFolder}>Create Folder</button>
                <input className="file-upload-input" ref={inputRef} type="file" onChange={handleFileUpload} />
                <ul style={{ display: "flex", padding: "24px", gap: "24px" }}>
                    {folderStructure.map((elem, idx) => {
                        return <li onClick={() => handleBackClick(idx)}>{elem.name}</li>;
                    })}
                </ul>
                <div>
                    {showCreateFolder && (
                        <div style={{ margin: "24px", padding: "24px", backgroundColor: "yellow" }}>
                            <input value={newFolder} onChange={(e) => setNewFolder(e.target.value)} />
                            <button onClick={handleCreateFolder}>Create</button>
                            <button onClick={() => setShowCreateFolder(false)}>Cancel</button>
                        </div>
                    )}
                </div>
                <div>
                    {fileFolders.map((elem) => {
                        return (
                            <div
                                style={{
                                    backgroundColor: elem.type === "folder" ? "yellow" : "orange",
                                    border: "1px solid grey",
                                    borderRadius: "8px",
                                    width: "fit-content",
                                    padding: "8px 16px",
                                    margin: "8px 16px",
                                }}
                                onDoubleClick={() => handleDoubleClick(elem)}
                            >
                                <p>{elem.name}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
