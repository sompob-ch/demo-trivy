# Trivy 

`Trivy`(pronunciation) is a comprehensive and versatile security scanner.
Trivy has scanners that look for security issues, and targets where it can find those issues.

### Trivy scans the files inside container images for

- Vulnerabilities
- Misconfigurations
- Secrets
- Licenses

---

- command scan docker image
```
trivy image node:20.15.0-alpine
```

---

- build account-api
```
cd /account-api
docker build -t demo-trivy-account-api:01 .
```

- trivy scan
```
trivy image demo-trivy-account-api:01
```

---

Number	Severity
0	Unknown
1	Low
2	Medium
3	High
4	Critical


# Ref
- https://trivy.dev/
- https://github.com/aquasecurity/trivy
- https://aquasecurity.github.io/trivy/v0.55/docs/target/container_image/