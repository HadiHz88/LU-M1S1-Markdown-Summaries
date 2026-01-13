# MCQ - IN401 Cloud Computing

Please check your answers against the provided solutions below.
Visit [My Website](https://www.hadihz.me/extra/in401-cloud-mcq) for an interactive version.

### 1. Which deployment model combines public cloud, private cloud, and on-premises infrastructure?

- **a.** Public Cloud
- **b.** Community Cloud
- **c.** Hybrid Cloud
- **d.** Federated Cloud

**Correct answer**: `c`
**Explanation**: Hybrid Cloud combines public, private, and on-premises infrastructure, enabling cloud bursting and flexible workload placement.

---

### 2. In which service model does the customer manage operating systems, applications, and data?

- **a.** SaaS
- **b.** PaaS
- **c.** IaaS
- **d.** FaaS

**Correct answer**: `c`
**Explanation**: In IaaS, customers manage OS, applications, and data, while the provider manages hardware, virtualization, storage, and networking.

---

### 3. What distinguishes elasticity from scalability in cloud computing?

- **a.** Elasticity is manual; scalability is automatic
- **b.** Elasticity dynamically adjusts resources; scalability handles growing workloads
- **c.** They are the same concept
- **d.** Elasticity only applies to storage

**Correct answer**: `b`
**Explanation**: Scalability handles growing workloads by adding resources. Elasticity dynamically adjusts resources in response to changing demands, including scaling down.

---

### 4. Which computing paradigm is the direct precursor to cloud's pay-per-use billing model?

- **a.** Grid Computing
- **b.** Cluster Computing
- **c.** Utility Computing
- **d.** Parallel Computing

**Correct answer**: `c`
**Explanation**: Utility Computing introduced service provisioning based on consumption (pay-per-use), metered like electricity, which directly influenced cloud billing models.

---

### 5. What are the two components of the future of cloud computing mentioned in the course?

- **a.** Intelligent Cloud and Quantum Computing
- **b.** Intelligent Edge and Intelligent Cloud
- **c.** Edge Computing and Fog Computing
- **d.** Distributed Cloud and Multi-Cloud

**Correct answer**: `b`
**Explanation**: The future combines Intelligent Edge (processing close to users/devices) with Intelligent Cloud (AI-powered centralized services).

---

### 6. Which SLA component specifies the expected service quality with metrics like uptime guarantees?

- **a.** Accountability
- **b.** Penalties
- **c.** Performance Metrics
- **d.** Warranties

**Correct answer**: `c`
**Explanation**: Performance Metrics in SLAs specify expected service quality, including uptime (e.g., 99.95%), response time, and throughput.

---

### 7. In the 'Trap and Emulate' mechanism, where does the Guest OS run?

- **a.** Kernel mode
- **b.** User mode
- **c.** Hypervisor mode
- **d.** Ring 0

**Correct answer**: `b`
**Explanation**: In Trap and Emulate, the Guest OS runs in user mode (restricted privilege). Privileged instructions trap to the VMM, which runs in kernel mode.

---

### 8. Which hypervisor type runs directly on hardware without a host OS?

- **a.** Type 2 Hypervisor
- **b.** Hosted Hypervisor
- **c.** Type 1 Hypervisor
- **d.** Container Runtime

**Correct answer**: `c`
**Explanation**: Type 1 (Bare Metal) hypervisors like Xen, VMware ESXi, and Hyper-V run directly on hardware, offering better performance for production environments.

---

### 9. What is the primary purpose of Domain 0 in Xen architecture?

- **a.** Run unprivileged guest VMs
- **b.** Manage hardware resources and allocate them to guest domains
- **c.** Provide network isolation
- **d.** Handle encryption

**Correct answer**: `b`
**Explanation**: Domain 0 is a privileged guest OS that manages hardware resources, allocates them to Domain U (unprivileged guests), and has direct hardware access.

---

### 10. Which storage type is accessed through APIs rather than a file system?

- **a.** Volume Storage
- **b.** File Storage
- **c.** Object Storage
- **d.** Block Storage

**Correct answer**: `c`
**Explanation**: Object Storage uses APIs for access (not file systems), storing files as objects with metadata and unique IDs. Examples: Amazon S3, Azure Blob.

---

### 11. What is a snapshot in cloud storage?

- **a.** A compressed archive of files
- **b.** An instant backup of a volume stored in object storage
- **c.** A virtual network configuration
- **d.** A security group rule

**Correct answer**: `b`
**Explanation**: A snapshot is an instant backup of a volume that copies all storage blocks into a file in object storage for recovery and cloning purposes.

---

### 12. In data dispersion, how many fragments must be retrieved to reconstruct a file if it was split into n fragments?

- **a.** All n fragments
- **b.** m fragments where m < n
- **c.** n/2 fragments
- **d.** Exactly 3 fragments

**Correct answer**: `b`
**Explanation**: Data dispersion requires only m out of n fragments (where m < n) to reconstruct the file, providing both security and availability.

---

### 13. What is the main security benefit of the NoHype architecture?

- **a.** Better performance
- **b.** Eliminates hypervisor as attack surface
- **c.** Easier resource management
- **d.** Lower cost

**Correct answer**: `b`
**Explanation**: NoHype removes the hypervisor layer entirely, eliminating VM escape attacks and hypervisor vulnerabilities, though it sacrifices flexibility.

---

### 14. Which encryption approach keeps the encryption engine in the instance but manages keys externally?

- **a.** Instance-managed encryption
- **b.** Externally-managed encryption
- **c.** Proxy encryption
- **d.** Transparent encryption

**Correct answer**: `b`
**Explanation**: Externally-managed encryption runs the encryption engine in the instance but stores keys in an external HSM or key management service.

---

### 15. What is the primary difference between vertical and horizontal scaling?

- **a.** Vertical adds more servers; horizontal increases server resources
- **b.** Vertical increases server resources; horizontal adds more servers
- **c.** They are the same
- **d.** Vertical is cheaper than horizontal

**Correct answer**: `b`
**Explanation**: Vertical scaling (scale up) increases resources of a single server (CPU/RAM). Horizontal scaling (scale out) adds more server instances.

---

### 16. Which load balancing algorithm routes traffic to the server with the fewest active connections?

- **a.** Round Robin
- **b.** Least Connections
- **c.** IP Hash
- **d.** Weighted Round Robin

**Correct answer**: `b`
**Explanation**: Least Connections algorithm routes traffic to the server with the fewest active connections, optimizing load distribution.

---

### 17. What is the key difference between Docker images and containers?

- **a.** Images are dynamic; containers are static
- **b.** Images are read-only templates; containers are running instances
- **c.** They are the same thing
- **d.** Containers are stored on disk; images run in memory

**Correct answer**: `b`
**Explanation**: Docker images are read-only templates (static). Containers are running instances of images (dynamic, mutable) with a thin read/write layer.

---

### 18. In Docker's layered architecture, where do runtime changes occur?

- **a.** In the base image layer
- **b.** In all layers simultaneously
- **c.** In the thin read/write container layer
- **d.** In a separate volume

**Correct answer**: `c`
**Explanation**: Runtime changes occur only in the thin read/write layer on top of read-only image layers, keeping base images unchanged and shareable.

---

### 19. What does the EXPOSE instruction in a Dockerfile specify?

- **a.** The port the container will listen on
- **b.** The network interface to use
- **c.** The firewall rules
- **d.** The load balancer configuration

**Correct answer**: `a`
**Explanation**: EXPOSE specifies the port where the application will be accessible, though port mapping is still needed to access it from the host.

---

### 20. What is Docker Compose primarily used for?

- **a.** Building single container images
- **b.** Managing and running multiple containers as a single application
- **c.** Deploying to production only
- **d.** Creating Dockerfiles

**Correct answer**: `b`
**Explanation**: Docker Compose orchestrates multiple containers defined in a YAML file, managing services like web servers, databases, and caches together.

---

### 21. Which PaaS platform is tightly coupled with Google's Go programming language?

- **a.** Heroku
- **b.** AWS Elastic Beanstalk
- **c.** Google App Engine
- **d.** Azure App Service

**Correct answer**: `c`
**Explanation**: Google App Engine is tightly coupled with Go and provides App Engine's Go SDK for application development.

---

### 22. What type of database does Google App Engine Datastore use?

- **a.** Relational SQL
- **b.** NoSQL schema-less object-based
- **c.** Graph database
- **d.** Time-series database

**Correct answer**: `b`
**Explanation**: App Engine Datastore is a NoSQL schema-less object-based data storage with entities (like tables) and properties (like columns).

---

### 23. What is the main purpose of Service Oriented Architecture (SOA) in SaaS?

- **a.** To increase server capacity
- **b.** To break applications into independent, reusable services
- **c.** To reduce network latency
- **d.** To eliminate databases

**Correct answer**: `b`
**Explanation**: SOA breaks applications into independent, reusable services that communicate over a network, enabling flexibility and reducing dependencies.

---

### 24. In multi-tenancy architecture, what is the 'noisy neighbor' problem?

- **a.** Network routing issues
- **b.** One tenant using excessive resources slows performance for others
- **c.** Database corruption
- **d.** Security breach

**Correct answer**: `b`
**Explanation**: The noisy neighbor problem occurs when one tenant's excessive resource usage (CPU, memory, I/O) degrades performance for other tenants sharing infrastructure.

---

### 25. Which multi-tenancy architecture provides the highest isolation?

- **a.** Shared Application + Shared Database
- **b.** Shared Application + Separate Database
- **c.** Separate Application + Separate Database
- **d.** All provide equal isolation

**Correct answer**: `c`
**Explanation**: Separate Application + Separate Database provides highest isolation (used for banking/government) but is most expensive and least scalable.

---

### 26. What does MFA stand for in SaaS authentication?

- **a.** Multiple File Access
- **b.** Multi-Factor Authentication
- **c.** Master File Allocation
- **d.** Managed Function Authentication

**Correct answer**: `b`
**Explanation**: MFA (Multi-Factor Authentication) adds additional verification like SMS codes, OTPs, or biometrics to improve security beyond passwords.

---

### 27. Which authentication method allows users to log in once and access multiple systems?

- **a.** Multi-Factor Authentication
- **b.** Token-Based Authentication
- **c.** Single Sign-On (SSO)
- **d.** OAuth 2.0

**Correct answer**: `c`
**Explanation**: Single Sign-On (SSO) allows users to authenticate once and access multiple systems using protocols like SAML 2.0 or OAuth 2.0.

---

### 28. What is the difference between authentication and authorization?

- **a.** They are the same
- **b.** Authentication verifies identity; authorization determines permissions
- **c.** Authorization verifies identity; authentication determines permissions
- **d.** Authentication is for APIs only

**Correct answer**: `b`
**Explanation**: Authentication verifies who a user is. Authorization determines what that authenticated user is allowed to do (which data/features they can access).

---

### 29. Which API type uses XML and strict contracts for enterprise systems?

- **a.** REST API
- **b.** SOAP API
- **c.** GraphQL
- **d.** Webhooks

**Correct answer**: `b`
**Explanation**: SOAP API uses XML and strict contracts, commonly used in enterprise systems like Salesforce SOAP API.

---

### 30. What are webhooks in SaaS integration?

- **a.** Database queries
- **b.** Event-driven push notifications from one app to another
- **c.** User interface components
- **d.** Encryption methods

**Correct answer**: `b`
**Explanation**: Webhooks are event-driven push notifications that one application sends to another when specific events occur (e.g., Stripe payment success).

---

### 31. What is the main advantage of microservices over monolithic architecture?

- **a.** Simpler deployment
- **b.** Independent scaling and fault isolation
- **c.** Requires less network bandwidth
- **d.** Easier to debug

**Correct answer**: `b`
**Explanation**: Microservices allow independent scaling of services and fault isolation—if one service fails, others continue working, unlike monolithic apps.

---

### 32. How do microservices communicate asynchronously?

- **a.** Direct API calls
- **b.** Shared database
- **c.** Message brokers like RabbitMQ
- **d.** File sharing

**Correct answer**: `c`
**Explanation**: Asynchronous communication uses message brokers (e.g., RabbitMQ, Kafka) for decoupled communication between microservices.

---

### 33. According to Amdahl's Law, if 10% of a program is sequential (α = 0.10), what is the maximum theoretical speedup achievable with infinite processors?

- **a.** 5×
- **b.** 10×
- **c.** 20×
- **d.** 100×

**Correct answer**: `b`
**Explanation**: Amdahl's Law: S ≈ 1/α. With α = 0.10, maximum speedup = 1/0.10 = 10×, regardless of the number of processors.

---

### 34. What is a 'cold start' in serverless computing?

- **a.** Starting a server in winter
- **b.** Initial delay when provisioning resources for the first request
- **c.** Rebooting a crashed function
- **d.** Deploying code to production

**Correct answer**: `b`
**Explanation**: Cold start is the delay on the first request because the cloud provider must provision resources. Subsequent requests are faster (warm start).

---

### 35. What does FaaS stand for?

- **a.** File as a Service
- **b.** Function as a Service
- **c.** Framework as a Service
- **d.** Firewall as a Service

**Correct answer**: `b`
**Explanation**: FaaS (Function as a Service) is serverless compute that runs event-driven code without managing servers (e.g., AWS Lambda, Azure Functions).

---

### 36. What is the maximum execution time for AWS Lambda functions?

- **a.** 5 minutes
- **b.** 10 minutes
- **c.** 15 minutes
- **d.** 30 minutes

**Correct answer**: `c`
**Explanation**: AWS Lambda has a maximum execution time of 15 minutes per function invocation.

---

### 37. What is the Backend for Frontend (BFF) pattern in API Gateways?

- **a.** Using one gateway for all clients
- **b.** Creating different gateways for different client types (mobile vs web)
- **c.** Storing backend data in the frontend
- **d.** Bypassing the API gateway

**Correct answer**: `b`
**Explanation**: BFF pattern creates separate API gateways optimized for different client types (mobile, web, IoT) to tailor responses to each client's needs.

---

### 38. What is the sidecar pattern in service mesh?

- **a.** Running services side-by-side on the same server
- **b.** Using a lightweight proxy alongside every microservice instance
- **c.** Deploying backup services
- **d.** Load balancing technique

**Correct answer**: `b`
**Explanation**: Sidecar pattern deploys a lightweight proxy (e.g., Envoy) alongside each microservice instance to handle all traffic, enabling mTLS, retries, and observability.

---

### 39. Which Kubernetes component is the only one that talks to etcd?

- **a.** Kubelet
- **b.** Kube-Proxy
- **c.** Kube-API Server
- **d.** Scheduler

**Correct answer**: `c`
**Explanation**: The Kube-API Server is the only component that directly communicates with etcd, the distributed key-value store holding cluster state.

---

### 40. What is a Pod in Kubernetes?

- **a.** A cluster of servers
- **b.** The smallest deployable unit, wrapping one or more containers
- **c.** A network interface
- **d.** A storage volume

**Correct answer**: `b`
**Explanation**: A Pod is Kubernetes' smallest deployable unit—a wrapper around one or more containers representing a single instance of a running application.

---

### 41. What is the role of the Kubelet?

- **a.** Managing the API server
- **b.** Storing cluster configuration
- **c.** Ensuring containers are running on each node
- **d.** Load balancing traffic

**Correct answer**: `c`
**Explanation**: Kubelet is the node agent that ensures containers are running as specified, watches the API server for Pod specs, and reports status.

---

### 42. What is the difference between declarative and imperative IaC?

- **a.** Declarative specifies steps; imperative specifies desired state
- **b.** Declarative specifies desired state; imperative specifies steps
- **c.** They are the same
- **d.** Declarative is only for networks

**Correct answer**: `b`
**Explanation**: Declarative IaC (Terraform) specifies the desired final state. Imperative IaC (Ansible) defines step-by-step instructions.

---

### 43. What does CI/CD stand for?

- **a.** Continuous Integration / Continuous Deployment
- **b.** Cloud Infrastructure / Cloud Development
- **c.** Container Integration / Container Deployment
- **d.** Central Intelligence / Central Development

**Correct answer**: `a`
**Explanation**: CI/CD stands for Continuous Integration (frequent code merges with automated tests) and Continuous Deployment/Delivery (automated deployment to production/staging).

---

### 44. What are Security Groups in cloud computing?

- **a.** Physical firewalls
- **b.** Stateful virtual firewalls controlling traffic to cloud resources
- **c.** User access roles
- **d.** Encryption keys

**Correct answer**: `b`
**Explanation**: Security Groups are stateful virtual firewalls that control inbound and outbound traffic at the resource level (instances, load balancers).

---

### 45. What does 'stateful' mean for Security Groups?

- **a.** They remember previous configurations
- **b.** If inbound traffic is allowed, outbound response is automatically permitted
- **c.** They require manual configuration
- **d.** They only work with TCP

**Correct answer**: `b`
**Explanation**: Stateful means if inbound traffic is allowed, the corresponding outbound response is automatically permitted (and vice versa).

---

### 46. What is a key advantage of referencing Security Groups instead of IP addresses?

- **a.** Faster performance
- **b.** Dynamic, identity-based network security
- **c.** Lower cost
- **d.** Better encryption

**Correct answer**: `b`
**Explanation**: Referencing Security Groups enables dynamic, identity-based security. As instances scale, security policies automatically apply without hardcoding IPs.

---

### 47. What is the 'new security perimeter' in cloud computing?

- **a.** Network firewalls
- **b.** Physical data centers
- **c.** Identity (IAM)
- **d.** Encryption keys

**Correct answer**: `c`
**Explanation**: In cloud environments, identity becomes the new security boundary, replacing traditional network perimeters, and governs access through IAM policies.

---

### 48. Which access control model assigns permissions grouped into roles?

- **a.** Attribute-Based Access Control (ABAC)
- **b.** Role-Based Access Control (RBAC)
- **c.** Policy-Based Access Control
- **d.** Discretionary Access Control

**Correct answer**: `b`
**Explanation**: RBAC groups permissions into roles, which are then assigned to identities. It's widely used in Kubernetes and cloud IAM systems.

---

### 49. What is the difference between data residency and data sovereignty?

- **a.** They are the same
- **b.** Residency is physical location; sovereignty is legal jurisdiction
- **c.** Residency is legal; sovereignty is physical
- **d.** Residency only applies to backups

**Correct answer**: `b`
**Explanation**: Data residency is the physical location where data is stored. Data sovereignty is the legal jurisdiction governing that data based on its location.

---

### 50. Under GDPR, what is the maximum penalty for non-compliance?

- **a.** €1 million
- **b.** €10 million or 2% of global revenue
- **c.** €20 million or 4% of global revenue
- **d.** €50 million

**Correct answer**: `c`
**Explanation**: GDPR can impose penalties up to €20 million or 4% of global annual revenue, whichever is higher, for serious violations.

---

### 51. What is envelope encryption?

- **a.** Encrypting emails
- **b.** Using a Key Encryption Key (KEK) to encrypt the Data Encryption Key (DEK)
- **c.** Physical security for keys
- **d.** Encrypting only metadata

**Correct answer**: `b`
**Explanation**: Envelope encryption uses a KEK to encrypt the DEK. The DEK encrypts data. This protects the key that protects the data, with KEK never leaving KMS.

---

### 52. Which type of cryptographic key uses the same key for encryption and decryption?

- **a.** Asymmetric keys
- **b.** Symmetric keys
- **c.** Public keys
- **d.** Session keys

**Correct answer**: `b`
**Explanation**: Symmetric keys use the same key for both encryption and decryption. They're fast and used for data encryption (e.g., AES).

---

### 53. What is the primary benefit of key rotation?

- **a.** Faster encryption
- **b.** Limits impact of key compromise
- **c.** Reduces storage cost
- **d.** Improves network speed

**Correct answer**: `b`
**Explanation**: Key rotation periodically replaces keys, limiting the impact if a key is compromised and reducing the amount of data encrypted with a single key.

---

### 54. In the shared responsibility model for IaaS, who is responsible for patching the operating system?

- **a.** Cloud provider
- **b.** Customer
- **c.** Both equally
- **d.** Third-party vendor

**Correct answer**: `b`
**Explanation**: In IaaS, the customer is responsible for OS patching, application security, and data protection. The provider manages physical infrastructure and hypervisor.

---

### 55. Which storage type would be best for a database requiring high I/O performance?

- **a.** Object Storage
- **b.** File Storage
- **c.** Volume Storage (Block)
- **d.** Archive Storage

**Correct answer**: `c`
**Explanation**: Volume Storage (Block Storage) acts as a raw disk with fast read/write access, making it ideal for databases and OS storage.

---

### 56. What happens to data in Docker's container layer when the container is deleted?

- **a.** It's saved to the image
- **b.** It's permanently lost
- **c.** It's backed up automatically
- **d.** It's moved to a volume

**Correct answer**: `b`
**Explanation**: The container's read/write layer is ephemeral—all runtime changes are permanently lost when the container is deleted unless stored in volumes.

---

### 57. Which component in Kubernetes decides which node a Pod should run on?

- **a.** Kubelet
- **b.** Controller Manager
- **c.** Scheduler
- **d.** API Server

**Correct answer**: `c`
**Explanation**: The Scheduler filters and scores nodes based on resources, taints/tolerations, and affinity rules, then binds the Pod to the selected node.

---

### 58. What is the main difference between containers and virtual machines?

- **a.** Containers are larger
- **b.** Containers share the host OS kernel; VMs each have a full OS
- **c.** VMs are faster to start
- **d.** Containers require a hypervisor

**Correct answer**: `b`
**Explanation**: Containers share the host OS kernel (process-level isolation), making them lightweight (MBs) and fast. VMs each have a full OS (hardware-level isolation), making them heavier (GBs).

---

### 59. In microservices architecture, what does 'database per service' mean?

- **a.** All services share one database
- **b.** Each microservice has its own independent database
- **c.** Databases are eliminated
- **d.** Services share database instances but separate schemas

**Correct answer**: `b`
**Explanation**: Database per service means each microservice manages its own database independently, enabling loose coupling and independent scaling.

---

### 60. Which serverless pricing model is most accurate?

- **a.** Pay for reserved capacity
- **b.** Pay only for execution time and requests
- **c.** Flat monthly fee
- **d.** Pay per server hour

**Correct answer**: `b`
**Explanation**: Serverless uses pay-per-use pricing based on number of requests, execution time, and memory/CPU usage. You pay nothing when idle (scales to zero).

---

### 61. What is the purpose of etcd in Kubernetes?

- **a.** Container runtime
- **b.** Distributed key-value store holding cluster state
- **c.** Load balancer
- **d.** Network proxy

**Correct answer**: `b`
**Explanation**: etcd is a distributed, strongly consistent key-value store that holds all cluster state, including resource definitions, secrets, configs, and node state.

---

### 62. Which factor does NOT contribute to cloud cost optimization?

- **a.** Auto-scaling based on demand
- **b.** Using reserved instances for stable workloads
- **c.** Keeping all resources running 24/7
- **d.** Right-sizing instances

**Correct answer**: `c`
**Explanation**: Keeping all resources running 24/7 wastes money. Cost optimization includes auto-scaling, reserved instances for predictable loads, and right-sizing.

---

### 63. What is the US CLOUD Act's impact on data sovereignty?

- **a.** It prevents data access by US authorities
- **b.** It allows US authorities to request data from US providers even if stored abroad
- **c.** It only applies to US-stored data
- **d.** It has no impact on cloud data

**Correct answer**: `b`
**Explanation**: The US CLOUD Act allows US authorities to request access to data from US-based providers, even if physically stored in other countries, impacting data sovereignty.

---

### 64. What is the primary goal of Green Computing?

- **a.** To increase the processing power of supercomputers
- **b.** To reduce energy consumption, carbon emissions, and electronic waste
- **c.** To exclusively use solar power for data centers
- **d.** To create biodegradable computer hardware

**Correct answer**: `b`
**Explanation**: Green computing refers to environmentally responsible computing practices that aim to reduce energy consumption, carbon emissions, and electronic waste throughout the lifecycle of technology products.

---

### 65. What is 'Cloud Bursting' in the context of a Hybrid Cloud?

- **a.** A security breach in the cloud
- **b.** The process of deleting data to save space
- **c.** Scaling workloads from a private cloud to a public cloud during demand spikes
- **d.** Moving all operations permanently to the public cloud

**Correct answer**: `c`
**Explanation**: Cloud bursting allows an organization to use its private cloud for normal workloads and 'burst' into a public cloud to access additional resources during times of high demand.

---

### 66. Where does a Type-2 (Hosted) Hypervisor run?

- **a.** Directly on the bare metal hardware
- **b.** On top of a host operating system
- **c.** Inside a Docker container
- **d.** It replaces the BIOS

**Correct answer**: `b`
**Explanation**: Type-2 Hypervisors (like VMware Workstation) run as an application on top of a host operating system, unlike Type-1 hypervisors which run directly on hardware.

---

### 67. Which virtualization technique allows users to access an application from a separate computer without installing it locally?

- **a.** Network Virtualization
- **b.** Storage Virtualization
- **c.** Application Virtualization
- **d.** Server Virtualization

**Correct answer**: `c`
**Explanation**: Application virtualization allows users to access and use an application from a separate computer (often via a server) without installing it on their local machine.

---

### 68. What does 'Horizontal Scaling' refer to in a PaaS environment?

- **a.** Increasing the CPU and RAM of a single server
- **b.** Adding more server instances to distribute the workload
- **c.** Optimizing the application code for speed
- **d.** Moving the application to a larger data center

**Correct answer**: `b`
**Explanation**: Horizontal scaling (Scale Out) involves adding more instances of a server or application to handle increased load, whereas vertical scaling involves adding power to a single instance.

---

### 69. Which instruction in a Dockerfile is used to specify the base image?

- **a.** RUN
- **b.** CMD
- **c.** FROM
- **d.** COPY

**Correct answer**: `c`
**Explanation**: The 'FROM' instruction initializes a new build stage and sets the Base Image for subsequent instructions (e.g., 'FROM openjdk').

---

### 70. What is the 'Noisy Neighbor' problem in Multi-Tenancy?

- **a.** Tenants sending spam emails to each other
- **b.** One tenant using excessive resources, degrading performance for others
- **c.** A security breach where tenants can see each other's data
- **d.** Loud cooling fans in the server room

**Correct answer**: `b`
**Explanation**: In a shared multi-tenant environment, a 'noisy neighbor' is a tenant that consumes a disproportionate amount of resources (CPU, memory), negatively affecting the performance of other tenants.

---

### 71. Which SaaS integration method involves an event-driven push notification from one app to another?

- **a.** REST API
- **b.** SOAP API
- **c.** GraphQL
- **d.** Webhooks

**Correct answer**: `d`
**Explanation**: Webhooks are used for event-driven communication, allowing one application to send real-time data (push notifications) to another when a specific event occurs.

---

### 72. What is the smallest deployable unit in Kubernetes?

- **a.** Container
- **b.** Pod
- **c.** Node
- **d.** Service

**Correct answer**: `b`
**Explanation**: A Pod is the smallest deployable unit in Kubernetes. It represents a single instance of a running application and can contain one or more tightly coupled containers.

---

### 73. What is a 'Cold Start' in Serverless computing?

- **a.** The time it takes to reboot a physical server
- **b.** The delay experienced when a function is invoked after being idle
- **c.** Deploying code to a cold data center
- **d.** The initial setup of an AWS account

**Correct answer**: `b`
**Explanation**: A Cold Start refers to the latency experienced when a serverless function is invoked for the first time or after a period of inactivity, as the provider must provision the runtime environment.

---

### 74. How do Security Groups differ from Network ACLs regarding state?

- **a.** Security Groups are stateful; Network ACLs are stateless
- **b.** Security Groups are stateless; Network ACLs are stateful
- **c.** Both are stateless
- **d.** Both are stateful

**Correct answer**: `a`
**Explanation**: Security Groups are stateful (return traffic is automatically allowed), while Network ACLs are stateless (return traffic must be explicitly allowed).

---

### 75. In the CIA Triad of Cloud Security, what does 'Integrity' ensure?

- **a.** Data is accessible only to authorized users
- **b.** Data and systems are accurate and free from unauthorized tampering
- **c.** Services are available 99.9% of the time
- **d.** Users are who they say they are

**Correct answer**: `b`
**Explanation**: Integrity ensures that data and systems remain accurate and consistent over their lifecycle and have not been altered by unauthorized parties.

---

### 76. Which computing paradigm is described as a collection of resources owned by multiple organizations that are coordinated to solve a common problem?

- **a.** Utility Computing
- **b.** Grid Computing
- **c.** Cluster Computing
- **d.** Edge Computing

**Correct answer**: `b`
**Explanation**: Grid computing is defined as a collection of resources owned by multiple organizations that are coordinated to allow them to solve a common problem.

---

### 77. Which cloud characteristic ensures that resources can be dynamically adjusted to meet varying workloads without manual intervention?

- **a.** Broad Network Access
- **b.** Resource Pooling
- **c.** Rapid Elasticity
- **d.** Measured Service

**Correct answer**: `c`
**Explanation**: Elasticity refers to the ability of a system to dynamically adjust its resource allocation in response to changing demands, enabling efficient resource utilization.

---

### 78. Which type of cloud storage is ideal for unstructured data (like images and videos) and is accessed via APIs rather than a file system?

- **a.** Block Storage
- **b.** Volume Storage
- **c.** Object Storage
- **d.** File Storage

**Correct answer**: `c`
**Explanation**: Object storage is a file repository used to store individual files ('objects') like images and videos, and is accessed through an API rather than a network share.

---

### 79. What is a characteristic of a Type-1 (Bare Metal) Hypervisor?

- **a.** It runs as an application inside a host operating system
- **b.** It runs directly on the underlying host hardware
- **c.** It requires a Windows installation to function
- **d.** It is primarily used for desktop virtualization only

**Correct answer**: `b`
**Explanation**: A Type-1 Hypervisor (Native/Bare metal) runs directly on the underlying host system and does not require a base server operating system.

---

### 80. Which load balancing algorithm distributes traffic to the server that currently has the lowest number of active sessions?

- **a.** Round Robin
- **b.** IP Hash
- **c.** Least Connections
- **d.** Random Selection

**Correct answer**: `c`
**Explanation**: The 'Least Connections' technique sends traffic to the server with the fewest active connections, preventing overload on busy servers.

---

### 81. In the context of Docker, what is the purpose of the 'docker build' command?

- **a.** To download an image from a registry
- **b.** To run a container from an image
- **c.** To create a Docker image from a Dockerfile
- **d.** To stop all running containers

**Correct answer**: `c`
**Explanation**: The 'docker build' command is used to build a docker image using a Dockerfile located in the specified directory.

---

### 82. What is a key principle of Service Oriented Architecture (SOA) regarding dependencies?

- **a.** Tight Coupling
- **b.** Loose Coupling
- **c.** Monolithic Design
- **d.** Hard Dependencies

**Correct answer**: `b`
**Explanation**: SOA promotes 'Loose Coupling', meaning applications interact with services through standardized interfaces, reducing dependencies so that the failure of one system does not impact others.

---

### 83. Which API type relies on XML and strict contracts, and is traditionally used in enterprise systems?

- **a.** REST API
- **b.** GraphQL
- **c.** SOAP API
- **d.** Webhooks

**Correct answer**: `c`
**Explanation**: SOAP APIs use XML and strict contracts, making them common for enterprise systems, whereas REST uses JSON and HTTP methods.

---

### 84. In Kubernetes, what is the role of 'etcd'?

- **a.** It acts as the front door for API requests
- **b.** It schedules pods to worker nodes
- **c.** It is a distributed key-value store that holds the cluster state
- **d.** It manages the network traffic between services

**Correct answer**: `c`
**Explanation**: etcd is a distributed, strongly consistent key-value store that holds the cluster state, including resource definitions, secrets, and configs.

---

### 85. What is the 'Database per Service' pattern in Cloud Native architectures?

- **a.** All microservices share a single massive database
- **b.** Each microservice has its own dedicated database to ensure loose coupling
- **c.** Databases are only used for the frontend application
- **d.** Data is stored exclusively in local text files

**Correct answer**: `b`
**Explanation**: In a cloud-native environment, each microservice typically uses its own database (Database per Service pattern) to ensure independence and scalability.

---

### 86. In cloud security, what effectively replaces the traditional network perimeter?

- **a.** Physical Firewalls
- **b.** Identity and Access Management (IAM)
- **c.** Antivirus Software
- **d.** The Hypervisor

**Correct answer**: `b`
**Explanation**: In cloud environments, IAM (Identity and Access Management) is the cornerstone of security and effectively replaces the traditional network perimeter, making identity the new security boundary.

---

### 87. Which statement accurately describes Cloud Security Groups?

- **a.** They are stateless and require explicit allow rules for return traffic
- **b.** They operate at the subnet level
- **c.** They are stateful; if inbound traffic is allowed, return traffic is automatically permitted
- **d.** They support explicit deny rules

**Correct answer**: `c`
**Explanation**: Security Groups are stateful, meaning if inbound traffic is allowed, the corresponding outbound response is automatically permitted.

---

### 88. Which command is used to create a Docker image from a Dockerfile?

- **a.** docker run
- **b.** docker build
- **c.** docker create
- **d.** docker commit

**Correct answer**: `b`
**Explanation**: The 'docker build' command is used to build a Docker image from a Dockerfile, often using the '-t' flag to tag the image.

---

### 89. Which flag is used with the 'docker run' command to map a host port to a container port?

- **a.** -v
- **b.** -d
- **c.** -p
- **d.** -it

**Correct answer**: `c`
**Explanation**: The '-p' flag is used for port mapping (e.g., '-p 80:80') to map a port on the host machine to a port inside the container.

---

### 90. What is the function of the command 'docker system prune'?

- **a.** It stops all running containers
- **b.** It removes all unused data including stopped containers, unused networks, and dangling images
- **c.** It pushes all local images to Docker Hub
- **d.** It updates the Docker engine to the latest version

**Correct answer**: `b`
**Explanation**: The 'docker system prune' command removes all unused Docker resources, such as stopped containers, unused networks, and build caches.

---

### 91. Which command specifically removes one or multiple Docker images?

- **a.** docker rm
- **b.** docker del
- **c.** docker rmi
- **d.** docker erase

**Correct answer**: `c`
**Explanation**: The 'docker rmi' command is used to force remove one or multiple images, whereas 'docker rm' is used for containers.

---

### 92. Which Docker Compose command builds images and runs containers defined in the YAML file?

- **a.** docker-compose start
- **b.** docker-compose run
- **c.** docker-compose up
- **d.** docker-compose build

**Correct answer**: `c`
**Explanation**: The 'docker-compose up' command builds all images and runs the containers specified in the docker-compose.yml file.

---

### 93. Which instruction in a Dockerfile sets the directory from which subsequent commands are run?

- **a.** MKDIR
- **b.** CD
- **c.** WORKDIR
- **d.** COPY

**Correct answer**: `c`
**Explanation**: The 'WORKDIR' instruction specifies the working directory inside the container where execution application files will be placed and commands run.

---

### 94. What does the '-it' flag allow you to do when running 'docker run'?

- **a.** Run the container in the background (detached mode)
- **b.** Run the container interactively
- **c.** Automatically remove the container when it exits
- **d.** Map network ports

**Correct answer**: `b`
**Explanation**: The '-it' flag allows you to run the container interactively, often used to open a bash shell inside the container.

---

### 95. Which command is used to stop and remove all services (containers, networks) created by 'docker-compose up'?

- **a.** docker-compose stop
- **b.** docker-compose down
- **c.** docker-compose halt
- **d.** docker-compose delete

**Correct answer**: `b`
**Explanation**: The 'docker-compose down' command stops containers and removes the resources (networks, containers) created by 'docker-compose up'.

---

### 96. In the context of DevOps, what is the primary practice of 'Continuous Integration' (CI)?

- **a.** Automatically deploying every change to production immediately
- **b.** Developers frequently merging code changes into a shared repository where automated tests run
- **c.** Manually copying code files to a server once a month
- **d.** Writing infrastructure configuration files using Python

**Correct answer**: `b`
**Explanation**: Continuous Integration (CI) involves developers frequently merging code changes into a shared repository, where automated tests run to ensure code quality.

---

### 97. What distinguishes 'Continuous Deployment' from 'Continuous Delivery'?

- **a.** Continuous Deployment automatically deploys code to production after passing tests, whereas Continuous Delivery may stop at staging
- **b.** Continuous Deployment involves manual testing, while Continuous Delivery is fully automated
- **c.** Continuous Deployment is for hardware, while Continuous Delivery is for software
- **d.** There is no difference; they are synonyms

**Correct answer**: `a`
**Explanation**: Continuous Deployment/Delivery (CD) automatically deploys code to production (CD) or staging (Delivery) after passing all tests.

---

### 98. What is the primary function of AWS Elastic Beanstalk?

- **a.** It is a SaaS application for email marketing
- **b.** It is a PaaS that automatically handles the provisioning, deployment, and scaling of web applications
- **c.** It is an IaaS service that provides raw bare-metal servers
- **d.** It is a database service for storing unstructured data

**Correct answer**: `b`
**Explanation**: AWS Elastic Beanstalk is a PaaS for deploying and scaling web applications where the platform automatically handles the provisioning of resources (EC2, load balancers, etc.).

---

### 99. How is billing determined for AWS Lambda functions?

- **a.** You pay a flat monthly fee regardless of usage
- **b.** You pay based on the number of servers provisioned
- **c.** You pay only for the duration the function runs (execution time) and the number of requests
- **d.** It is free for all users

**Correct answer**: `c`
**Explanation**: With AWS Lambda, you pay only for the execution time (ms-based) and the number of requests; you do not pay for idle time.

---

### 100. Which AWS service is an example of 'Declarative' Infrastructure as Code (IaC)?

- **a.** AWS EC2
- **b.** AWS Lambda
- **c.** AWS CloudFormation
- **d.** Amazon S3

**Correct answer**: `c`
**Explanation**: AWS CloudFormation is listed as an example of a Declarative IaC approach, where you specify the desired final state of the infrastructure.

---
