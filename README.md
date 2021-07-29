# Integrating Amazon API Gateway's REST API to AWS Step Functions' Synchronous Express Workflow

Here's a sample SAM application that provides the resources to integrate Amazon API Gateway's REST API to AWS Step Functions' Synchronous Express Workflow. And to add to that, it also includes API key configuration, passing the API Key to the Step Function execution. The application also provides mapping templates to help in input and output data modeling for the API.

# Prerequisites
- AWS Account
- Configuring [AWS Credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)
- [SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)

# Usage

#### Clone the repository 
```bash
git clone https://github.com/antstackio/api-gateway-to-synchronous-step-function.git
```

#### Build SAM Application
```bash
sam build -t template.json
```

#### Deploy SAM Application
Use the "guided" flag while deploying the SAM application for the first time.
```bash
sam deploy --guided      
```

#### Deleting SAM Application
Delete the deployed cloud formation stack to delete all the deployed resources.



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)