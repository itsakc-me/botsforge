import { common, objectstorage } from "oci-sdk";

const provider = new common.ConfigFileAuthenticationDetailsProvider();
const client = new objectstorage.ObjectStorageClient({
	authenticationDetailsProvider: provider,
});

export async function putObject(objectKey: string, content: string) {
    const request: objectstorage.requests.PutObjectRequest = {
        namespaceName: process.env.OCI_NAMESPACE!,
        bucketName: process.env.OCI_BUCKET_NAME!,
        objectName: objectKey,
        putObjectBody: content,
        contentLength: content.length,
    };

    await client.putObject(request);
    return `https://objectstorage.${process.env.OCI_REGION}.oraclecloud.com/n/${process.env.OCI_NAMESPACE}/b/${process.env.OCI_BUCKET_NAME}/o/${objectKey}`;
}
