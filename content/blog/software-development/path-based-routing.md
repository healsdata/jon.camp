---
title: "[DRAFT] Path-Based Routing"
date: 2025-01-24T09:03:59-05:00
lastmod: 2025-01-24T09:03:59-05:00
author: Jon
layout: post
slug: path-based-routing
summary: Using paths, instead of subdomains, to route traffic to microservices can help eliminate CORS headaches. 
---

I've worked at a number of companies that have made the move from a monolith to microservices and all of them used 
subdomains for routing to different services. The monolith, usually at www.example.com, becomes smaller services like
auth.example.com, mail-api.example.com, etc. 

For the most part, this has worked well. But there's been a few challenges that I've seen over and over.

### API Versioning
There's a few techniques to API versioning, the simplest of which is to adding the version to the URI path. 
The original version might be api.example.com/users and the second version becomes api.example.com/v2/users. Alternatively, 
versioning can be handled via headers. The client might provide an "Accepts-version: 2.0" header with each call.

In both situations, the service that api.example.com points to typically handles serving the correct version. This can
be useful if you're reusing code -- repositories, models, etc. It's less useful if you're trying to switch from one
language or technology to a different one.

### CORS

"Cross-origin resource sharing (CORS) is a mechanism to safely bypass the same-origin policy, that is, it allows a web 
page to access restricted resources from a server on a domain different than the domain that served the web page."
{{< rawhtml >}}<span class="sidenote-anchor"></span>
<span class="sidenote"><a href="https://en.wikipedia.org/wiki/Cross-origin_resource_sharing">Wikipedia</a></span>
{{< /rawhtml >}}

Unfortunately, the protocol doesn't support wildcard domains (like *.example.com) so engineers have to list all the
origins that are allowed to call a particular service. I've seen this lead to frustration and the team ends up allowing
access from every domain, effectively defeating the purpose of the whole system.

## Path-Based Routing

As we've been migrating from EC2 to EKS, my boss has been advocating that we transition to path-based routing. He'd 
observed a few things in our environment that made development more challenging:

1. Local development used different ports for each container. The frontend might be https://localhost:8080 and then
one backend is localhost:8081 and the next is localhost:8082. Unfortunately, browsers treat these as different domains
for CORS and cookies. Since this wasn't the same situation in other environments, it made testing weird.
2. Our staging environment used two levels of subdomains. Each service was (something).staging.example.com. This was
different from our product environment that used a single subdomain, (something).example.com
3. In our multi-tenant application, each customer's instance was represented by a subdomain. The UI is hosted at
   (cusomerslug).example.com. We'd reserve subdomains for our services, such as www, api, etc.

I knew this was a bit of a mess and was curious to learn more about path-based routing how it could help. This came to
a head when we decided to make a V2 version of one of our smaller services. It was written in a different programming
language than the rest of our services.


