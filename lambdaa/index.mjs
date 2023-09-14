import AWS from "aws-sdk";
const s3 = new AWS.S3();

export const handler = async (event, context) => {
  try {
    // Specify the S3 bucket and file key
    const bucketName = "ust-ff-jason";
    const fileKey = "UST_1M.json"; // Replace with your file's path and name

    // Specify S3 parameters
    const params = {
      Bucket: bucketName,
      Key: fileKey,
    };

    // Read the JSON file from S3
    const s3Response = await s3.getObject(params).promise();
    const jsonString = s3Response.Body.toString("utf-8");

    // Parse the JSON data
    const jsonData = JSON.parse(jsonString);

    // Now you can work with the JSON data as needed
    console.log("JSON data:", jsonData);

    return {
      statusCode: 200,
      body: "JSON file successfully read from S3",
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: "Error reading JSON file from S3",
    };
  }
};
