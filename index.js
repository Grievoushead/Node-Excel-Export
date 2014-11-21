require('node-zip');

Date.prototype.getJulian = function() {
	return Math.floor((this / 86400000) -
	(this.getTimezoneOffset()/1440) + 2440587.5);
}

Date.prototype.oaDate = function() {
 return (this - new Date(Date.UTC(1899, 12, 29))) / (24 * 60 * 60 * 1000);
}

//var templateXLSX = 'UEsDBAoAAAAIABN7eUK9Z10uOQEAADUEAAATAAAAW0NvbnRlbnRfVHlwZXNdLnhtbK2US04DMQyGrzLKFk1SWCCEOu0C2EIluECUeDpR81LslvZsLDgSV8CdQQVViALtJlFi+//+PN9eXsfTdfDVCgq6FBtxLkeigmiSdXHeiCW19ZWYTsZPmwxYcWrERnRE+VopNB0EjTJliBxpUwmaeFjmKmuz0HNQF6PRpTIpEkSqaashJuNbaPXSU3W35ukBy+WiuhnytqhG6Jy9M5o4rFbR7kHq1LbOgE1mGbhEYi6gLXYAFLzsexm0i2e9sPqWWcDj36Afq5Jc2edg5zL+hMgYrMn/g5hUoM6Fo4UcfGIe+KyKs1DNdKF7HVhR8T7MOBMVa8tj9xK2/i3Y38LXXmGnC9hHKnxp8GgD+4f5RfugEdp4OLmDXvQQ+jmVRV+Barh/pzWxkz/kg/hRwtAebaFX2QFV/wlM3gFQSwMECgAAAAAAEmgvQwAAAAAAAAAAAAAAAAYAAABfcmVscy9QSwMECgAAAAgAE3t5QnSZgAMeAQAAnAIAAAsAAABfcmVscy8ucmVsc7WSQW7DIBBFr4LYxxib1E4VJ5tusquiXGAMg2PFBgQkdc/WRY/UKxRVrZpUiVSp6hKY//RmhreX1+V6GgdyQh96axrKs5wSNNKq3nQNPUY9q+l6tdziADFVhH3vAkkRExq6j9HdMxbkHkcImXVo0ou2foSYjr5jDuQBOmRFnt8xf86gl0yye3b4G6LVupf4YOVxRBOvgH9UULID32FsKJsG9mT9obX2kCUqJRvV0K0AKIq25MChEsWCU8L+TQ2niEahmjmf8j72GM78lJWP6T4wcO5b0G/UH5xuL4CNGEFBBCatx+tGX+mA/pRau51hKLVSJRelLrioF/liDkLIinM+b6uibDMXRiXd58xRi7qSJeayEgLq6qM/dvHHVu9QSwMECgAAAAAAEmgvQwAAAAAAAAAAAAAAAAkAAABkb2NQcm9wcy9QSwMECgAAAAgAE3t5Qu9e315hAQAAPQMAABAAAABkb2NQcm9wcy9hcHAueG1snZNNTsMwEIWvYrxv3ZYKoShxVQESGyCiFSyRcSatRWJb9jRquRoLjsQVcBIoafkRsBvPfJl570l5eXqOJ+uyIBU4r4xO6LA/oAS0NJnSi4SuMO8d0wmPhY1SZyw4VOBJ+ET7qMKELhFtxJiXSyiF7wdCh2FuXCkwPN2CmTxXEk6NXJWgkY0GgyOWGVlv8zfzjQVP3/YJ+999sEbQGWQ9u9VIG81TawslBQZv/EJJZ7zJkZytJRQx25vXfFg7A7lyCjd80BDdTk3MpCjgJJzhuSg8NMxHrybOQdThpUI5z+MKowokGkfuhYfab0Ir4ZTQSIlXj+E5pi3Wdpu6sB4dvzXuwS8B0Mds22zKLtut1ZgPGyAUP4LtrktRQkauhV7AX06Mvj7Btl55E8tuEKExV1iAv8pT4fCbaBoB78Ec0o7WWR0EGXZl7s8OUqc03k0diF9grZpPtjsG9vSynZ+AvwJQSwMECgAAAAAAEmgvQwAAAAAAAAAAAAAAAAgAAABwYWNrYWdlL1BLAwQKAAAAAADFhXlCAAAAAAAAAAAAAAAAEQAAAHBhY2thZ2Uvc2VydmljZXMvUEsDBAoAAAAAAMWFeUIAAAAAAAAAAAAAAAAaAAAAcGFja2FnZS9zZXJ2aWNlcy9tZXRhZGF0YS9QSwMECgAAAAAAxYV5QgAAAAAAAAAAAAAAACoAAABwYWNrYWdlL3NlcnZpY2VzL21ldGFkYXRhL2NvcmUtcHJvcGVydGllcy9QSwMECgAAAAgAE3t5QnOHNsgCAQAA2gEAAFEAAABwYWNrYWdlL3NlcnZpY2VzL21ldGFkYXRhL2NvcmUtcHJvcGVydGllcy9lY2ZkZDMxNDNmMjE0ODkwOTVhNDRjNzExMTViNzIzYi5wc21kY3Ctkc1OwzAQhF8l8j12nEDUWEl6AHECCYlKIG6Ws0kt6h/ZW1KejQOPxCuQRm0QiCPnmfk0s/v5/lGvD2aXvEKI2tmGcJqRBKxynbZDQ/bYpyuybmvlAtwH5yGghphMGRtFpxqyRfSCMb8PO+rCwDrFYAcGLEbGKWdk8SIEE/8MzMriPES9uMZxpGMx+/Is4+zp7vZBbcHIVNuI0io4pZZEnOVIp6p2UnoXjMQ4E7xUL3KAI6lkBlB2EiU7Lkv9Mo209amqUAEkQpdMhQS+eWjIWXksrq43N6TNM16kWZHmlxteifxCFBVdlSWvyuq5Zr8432AzXbfX/0A+g9qa/XxQ+wVQSwMECgAAAAAAEmgvQwAAAAAAAAAAAAAAAAMAAAB4bC9QSwMECgAAAAAAxYV5QgAAAAAAAAAAAAAAAAkAAAB4bC9fcmVscy9QSwMECgAAAAgAE3t5QidKfDLiAAAAvAIAABoAAAB4bC9fcmVscy93b3JrYm9vay54bWwucmVsc7WSQU7DMBBFr2LNnkwoqEKobjdsuqW9gOVM4qiJbXmmtD0bix6pV8AECWHEgk02tvzH8/TG8u39utqcx0G9UeI+eA33VQ2KvA1N7zsNR2nvnmCzXr3SYCTfYNdHVrnFswYnEp8R2ToaDVchks+VNqTRSD6mDqOxB9MRLup6ieknA0qm2l8i/YcY2ra39BLscSQvf4CRnUnU7CTlCRjU3qSORAOeh7JUZTKobaMhbZsHUDifkVwG+q0yZYXD45wOp5AO7Iik1PiOP98tb4XQYk4hyb1UykzR11p4LCcPLP7g+gNQSwMECgAAAAgAE3t5QiLaWytNAgAAeggAAA0AAAB4bC9zdHlsZXMueG1s7VbbitswEP0VofeuktCWEuIs7RbDwrIt3RT2VbbHtrq6GEnOOvtrfegn9Reqm51LoSWlLBSaF80czRnPTVK+f/22uhwER1vQhimZ4fnFDCOQpaqYbDLc2/rFG3y5Xg1LY3cc7loAixxDmuWQ4dbabkmIKVsQ1FyoDqTbq5UW1DpVN8R0GmhlPE1wspjNXhNBmcTeo+xFLqxBpeqldZ8+AFFcrqsMu3iiwytVQYYxIusVmcieUit56sVDfnV52becNRJtKc9wQQ1wJiE4cSk9RXg+T0CpuNJIN0WG83wWfmlHUgHR+IpyVmiW8JoKxndxZzHGFr+ehBgi43wKcYFHyK8dtRa0zJ2KkrzZdS5TqVKgZG/8W1Kj6W6+eHXMS0KIpFC6cs0+LlcEUcVooyTln7tQ9lF9rx6lB7wlh9qiMAopwF+VjUR7b6JZ055FDARvY1V3Ds+Zx4ysVeIcYmR4ozHvc9gjJ7ny5TwQQ+VL4PzOe7yvT0ZhqE/nXU6i61sSo6uk0K7ju9teFKDzcDr2qB8K39iovQus/W44DQLkAeGjVhZKG89/CKibEMRV+QBV8NeyqoIwCSnpof4p+vnLfyt8ctyXsU9/o0VD/SzJ0tEItUqzJxeXv4sakKApx/5mt6wMl18YcIwsDPaTsjQ6cY4fNe02DgwKk9X4QQ3cGW3heg996Y1l9e6GGnvj7tGAmVYz+bBRORtp1D8eH6ZcyLOM1P9y/2G5yTTyR7fUyRMx4cg/hRm+9aXlB2UvesYtk0kjx0fLBHX/F2L9A1BLAwQKAAAAAADFhXlCAAAAAAAAAAAAAAAACQAAAHhsL3RoZW1lL1BLAwQKAAAACAATe3lCdbGRXqsFAAC7GwAAEgAAAHhsL3RoZW1lL3RoZW1lLnhtbO1ZTY/bRBj+KyPfW8dJnGZXTatNNmmh3Xa1G4p6nDgTe5qxx5qZ7DY31B6RkBAFcUHixgEBlVqJA0X8mIUiKNL+BV47XnucjLvZdhFFbA6JZ/y83x9+xzn+6Zer1x+GDB0QISmPOpZzuWYhEnl8TCO/Y83U5FLbun7tKt5UAQkJAnAkN3HHCpSKN21berCN5WUekwjuTbgIsYKl8O2xwIfAJGR2vVZr2SGmkYUiHJKOdXcyoR5Bw4SllTPvM/iKlEw2PCb2vVSiTpFix1Mn+ZFz2WMCHWDWsUDOmB8OyUNlIYalghsdq5Z+LGRfu2rnVExVEGuEg/RzQphRjKf1lFD4o5zSGTQ3rmwXEuoLCavAfr/f6zsFxxSBPQ+sdVbAzUHb6eZcNdTicpV7r+bWmksEmoTGCsFGt9t1N8oEjYKguULQrrWaW/UyQbMgcFdt6G71eq0ygVsQtFYIBlc2Ws0lghQVMBpNV+BJZIsQ5ZgJZzeN+Dbg23kuFDBby7QFg0hV5V2IH3AxAEAaZaxohNQ8JhPsAa6Hw5GgOJWANwnWbmV7nlzdS8Qh6Qkaq471foyhQArM8Yvvjl88Q8cvnh49en706Mejx4+PHv1goryJI1+nfPXNp3999RH689nXr558XkEgdYLfvv/4158/q0AqHfnyi6e/P3/68stP/vj2iQm/JfBIxw9pSCS6Qw7RHg8T+wwiyEickWQYYFoiwQFATci+CkrIO3PMjMAuKfvwnoC2YETemD0o6bsfiJmiJuStICwhdzhnXS7MNt1KxWk2zSK/Qr6Y6cA9jA+M4ntLUe7PYshsamTaC0hJ1V0Ggcc+iYhCyT0+JcREd5/Skn93qCe45BOF7lPUxdTsmCEdKTPVTRpCgOZGHSHqJQ/t3ENdzowCtslBGQoVgpmRKWElb97AM4VDs9Y4ZDr0NlaBUdH9ufBKjpcKgu4TxlF/TKQ0Et0V85LKtzC0KHMG7LB5WIYKRadG6G3MuQ7d5tNegMPYrDeNAh38npxCxmK0y5VZD16umWQNAcFRdeTvUaLOWOwfUD8wJ0tyZyZOunqpP4c0el2zZhS69UWzXmrWW/AEMxbJcouuBP5HG/M2nkW7JEn+i7580Zcv+vJrKnztblw0YFufq1OGYeWQPaGM7as5I7dl2rol6D0ewGa6SInyoT4O4PJEXgnoC5xeI8HVh1QF+wGOQY6TivBlxtuXKOYSDhNWJfP0bErB/HTPzQ+UAMdqh48X+43SSTNnlK58qYtqJCzWFde48rbinAVyTXmOWyHPfb08W/Mp1AbCyZsDp1XP1JQeZmSceD/jcBKdc4+UDPCYZKFyzLY4jXV91z7ddZq8jcbbylsnVrrAZpVA9zyCVVsNlr1anSwqr9AhKObWXQt5OO5YExi84DKMgaFMWhJmftSxPJVZc2ptL9tckaBOrdrmkpBYSLWNZbAgS2/lL2WiwoS620zYnY8Npv60ph6NtvOv6mEvR5hMJsRTFTvFMrvHZ4qI/WB8iEZsJvYwaN5cZNmYSniU1E8WAuq1mSVguQ9k9bD86ierE8ziAGc9qq1nwAKfXudKpCtNP7tC+Te0pXGOtrj/Z1uS9IXxtjFOz2EwHwiMkjztWFyogEM/igPqDQRMFKkwUAxBbaQtiyWvsBNlyYHWwhZMFg3PD9Qe9ZGg0PVUIAjZVZmlp3BzTjpkVh4Zp6zj5ArLePE7IgeEDZMibiUusFCQt5XMFylwOXC2qcZG/uBdnoqaVVPRKWNDIap5limlqT8EtGfDxttqccYHcL3C7Lq7/gM4hpMKSr6gkVPhsWIGHvI9yAJUDJ2QkpfaWSnmmyPQuq3bl/D6Z2esIhDtqrif63iqebxR5fFTBL65x12Dw91T/G2vFqytHXnS1crfXXz0AIRvw5lqxpTM3ks9hNNp7+TfCWCUyUyJr/0NUEsDBAoAAAAIABN7eUKJ3nBGAgEAALsBAAAPAAAAeGwvd29ya2Jvb2sueG1sjZBNbsIwEIWvYs2+OESirSIMm27YVJWK2rWxx8QitiOPgdytix6pV6gdiEBddeX5+9688c/X93I9uI6dMJINXsB8VgFDr4K2fi/gmMzDM6xXy6E5h3jYhXBged5TEwW0KfUN56RadJJmoUefeyZEJ1NO454HY6zCl6CODn3idVU98oidTHkXtbYnuKoN/1GjPqLU1CIm113EnLQe7t29RZa946t0KGDbWvq8NoDxMlfCD4tnuodKgRkbKb0XcQH5D6RK9oRbuRuzzPI/8OjjFjE/rhwF2BzYWNxoATWw2NgcxI2uJ6UbrNFYj7oYpotFJTtVzshP4ef14qleTOBkefULUEsDBAoAAAAAAMWFeUIAAAAAAAAAAAAAAAAOAAAAeGwvd29ya3NoZWV0cy9QSwMECgAAAAgAEmgvQ9CW7SU4AgAAkgUAABcAAAB4bC93b3Jrc2hlZXRzL3NoZWV0LnhtbI1UwW7bMAz9FUH3xXactkGQpGgbFOthaNEO21mx6ViILBmU3CT7+lFSUiSDWuxGUs+P78kU57f7TrF3QCuNXvBilHMGujK11JsFH1zzbcqZdULXQhkNC34Ay2+X8/1sZ3BrWwDHiEHbGS5461w/yzJbtdAJOzI9aDprDHbCUYqbzDSNrGBlqqED7bJxnl9nCEo46m5b2Vt+ZNv/D5vtEUQdRHQqknVCau7lheoL+tAMTkkNL8js0HUCD/egzI7M8lPhVW5aFwrZcp5dfBzCXxJ29iJjTqzfQEHloF5wujR/HWtjtv7wKZbOuC4JHoMH0lNDIwblXs3uOxwlXIXvjsCVcMInaHYMo+BeaEvRbBJcVr585+uhIxHYUH9f5r73e1BQfSDvU8gihXxIIccp5CqFLC+QWXBwZmT8iZFxgmqSNBKRRUDqk7zJ1fWkKJN2zpnXXxlfnSNPzOWomHztqPzEUZlwdJV0VH7iKJ9Mk47KhKPkT1+VCUfj0U0xHSc9Zf8MX3voAekBbe1FxhCaOHs4kzTw+FQXPI785Re92MAPgRupLVPQkIh8dENjjnHiY+JMfwrXxjnT+YySlh444DFpjHExuTk9E0/+Bm7oWS+o6Zv8A/GdVEL5KCfbHvOMgaY2O/2zBf1MG48zg5K2UFg+dBTfIvVXotre6fp3Kx2Ee6tRBNmcVaDUg+n88qIr1bQRaV0iGqSslrZX4gD1UVqU/hg0xwrtDAUvAp1llRm0O9sSH9t0+RdQSwMECgAAAAgAEmgvQxfSrAOmAAAAOgEAABQAAAB4bC9zaGFyZWRTdHJpbmdzLnhtbHWQQQqDMBBFrxKyr7FdSBGji0JP0B4g6lQDZpJmJsXjVy1uCm4+f+YNPJiqmd0kPhDJetTynOVSAHa+tzho+XzcT1fZ1NVcErFYTpHKWcuROZRKUTeCM5T5ALiwl4/O8DLGQVGIYHoaAdhN6pLnhXLGohQJ7TvBzSdkLQspur1tErsm18Rx8Vdq7Wv+9jvtDcMRa72fjhgm10I8osEekT+Z2p5RfwFQSwMECgAAAAAAsmgvQwAAAAAAAAAAAAAAABQAAAB4bC93b3Jrc2hlZXRzL19yZWxzL1BLAwQUAAAACAAAACEAi8ugjuUAAABrAQAAIgAAAHhsL3dvcmtzaGVldHMvX3JlbHMvc2hlZXQueG1sLnJlbHON0MFKAzEQBuC74DuE3G2yXStb2d0iVKEHL1IfYDaZ7IZmJyFJtX17Q0Gx4MG5DfPzzTDt5jQ79oExWU8drxaSMyTltaWx4+/7l7uGs5SBNDhP2PEzJr7pb2/aN3SQrac02ZBYUSh1fMo5PAqR1IQzpIUPSGVifJwhlzaOIoA6wIhiKeWDiL8N3l+ZbKc7Hne64mx/Dvgf2xtjFW69Os5I+Y8VYipSdJYOBYU4Yv5hj3EAghCcVZf8Bdz6T3Ie9JNzYrWsazM0cn0/GC0bU69kqar5ll69Lkc+nzJGAsdF34qrF/VfUEsBAhQACgAAAAgAE3t5Qr1nXS45AQAANQQAABMAAAAAAAAAAAAAAAAAAAAAAFtDb250ZW50X1R5cGVzXS54bWxQSwECFAAKAAAAAAASaC9DAAAAAAAAAAAAAAAABgAAAAAAAAAAABAAAABqAQAAX3JlbHMvUEsBAhQACgAAAAgAE3t5QnSZgAMeAQAAnAIAAAsAAAAAAAAAAAAAAAAAjgEAAF9yZWxzLy5yZWxzUEsBAhQACgAAAAAAEmgvQwAAAAAAAAAAAAAAAAkAAAAAAAAAAAAQAAAA1QIAAGRvY1Byb3BzL1BLAQIUAAoAAAAIABN7eULvXt9eYQEAAD0DAAAQAAAAAAAAAAAAAAAAAPwCAABkb2NQcm9wcy9hcHAueG1sUEsBAhQACgAAAAAAEmgvQwAAAAAAAAAAAAAAAAgAAAAAAAAAAAAQAAAAiwQAAHBhY2thZ2UvUEsBAhQACgAAAAAAxYV5QgAAAAAAAAAAAAAAABEAAAAAAAAAAAAQAAAAsQQAAHBhY2thZ2Uvc2VydmljZXMvUEsBAhQACgAAAAAAxYV5QgAAAAAAAAAAAAAAABoAAAAAAAAAAAAQAAAA4AQAAHBhY2thZ2Uvc2VydmljZXMvbWV0YWRhdGEvUEsBAhQACgAAAAAAxYV5QgAAAAAAAAAAAAAAACoAAAAAAAAAAAAQAAAAGAUAAHBhY2thZ2Uvc2VydmljZXMvbWV0YWRhdGEvY29yZS1wcm9wZXJ0aWVzL1BLAQIUAAoAAAAIABN7eUJzhzbIAgEAANoBAABRAAAAAAAAAAAAAAAAAGAFAABwYWNrYWdlL3NlcnZpY2VzL21ldGFkYXRhL2NvcmUtcHJvcGVydGllcy9lY2ZkZDMxNDNmMjE0ODkwOTVhNDRjNzExMTViNzIzYi5wc21kY3BQSwECFAAKAAAAAAASaC9DAAAAAAAAAAAAAAAAAwAAAAAAAAAAABAAAADRBgAAeGwvUEsBAhQACgAAAAAAxYV5QgAAAAAAAAAAAAAAAAkAAAAAAAAAAAAQAAAA8gYAAHhsL19yZWxzL1BLAQIUAAoAAAAIABN7eUInSnwy4gAAALwCAAAaAAAAAAAAAAAAAAAAABkHAAB4bC9fcmVscy93b3JrYm9vay54bWwucmVsc1BLAQIUAAoAAAAIABN7eUIi2lsrTQIAAHoIAAANAAAAAAAAAAAAAAAAADMIAAB4bC9zdHlsZXMueG1sUEsBAhQACgAAAAAAxYV5QgAAAAAAAAAAAAAAAAkAAAAAAAAAAAAQAAAAqwoAAHhsL3RoZW1lL1BLAQIUAAoAAAAIABN7eUJ1sZFeqwUAALsbAAASAAAAAAAAAAAAAAAAANIKAAB4bC90aGVtZS90aGVtZS54bWxQSwECFAAKAAAACAATe3lCid5wRgIBAAC7AQAADwAAAAAAAAAAAAAAAACtEAAAeGwvd29ya2Jvb2sueG1sUEsBAhQACgAAAAAAxYV5QgAAAAAAAAAAAAAAAA4AAAAAAAAAAAAQAAAA3BEAAHhsL3dvcmtzaGVldHMvUEsBAhQACgAAAAgAEmgvQ9CW7SU4AgAAkgUAABcAAAAAAAAAAAAAAAAACBIAAHhsL3dvcmtzaGVldHMvc2hlZXQueG1sUEsBAhQACgAAAAgAEmgvQxfSrAOmAAAAOgEAABQAAAAAAAAAAAAAAAAAdRQAAHhsL3NoYXJlZFN0cmluZ3MueG1sUEsBAh8ACgAAAAAAsmgvQwAAAAAAAAAAAAAAABQAJAAAAAAAAAAQAAAATRUAAHhsL3dvcmtzaGVldHMvX3JlbHMvCgAgAAAAAAABABgAEu9oH/uxzgES72gf+7HOARLvaB/7sc4BUEsBAh8AFAAAAAgAAAAhAIvLoI7lAAAAawEAACIAJAAAAAAAAACAAAAAfxUAAHhsL3dvcmtzaGVldHMvX3JlbHMvc2hlZXQueG1sLnJlbHMKACAAAAAAAAEAGAAASIi8hueoARLvaB/7sc4BEu9oH/uxzgFQSwUGAAAAABYAFgDzBQAApBYAAAAA';

var templateXLSX = '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';

var sheetFront = '<?xml version="1.0" encoding="utf-8" standalone="yes"?>' +
    '<x:worksheet xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:x="http://schemas.openxmlformats.org/spreadsheetml/2006/main">' +
    '<x:sheetPr><x:outlinePr summaryBelow="1" summaryRight="1" /></x:sheetPr>' +
    '<x:sheetViews><x:sheetView tabSelected="0" workbookViewId="0" /></x:sheetViews><x:sheetFormatPr defaultRowHeight="15" /><x:sheetData>';

var sheetBack = '</x:sheetData>';
//'<x:hyperlinks>' +
//'<x:hyperlink ref="A1" r:id="rId1"/>' +
//'</x:hyperlinks>' +
var workSheetBack = '<x:pageMargins left="0.75" right="0.75" top="0.75" bottom="0.5" header="0.5" footer="0.75" />' +
'<x:pageSetup paperSize="1" scale="100" pageOrder="downThenOver" orientation="default" blackAndWhite="0" draft="0" cellComments="none" errors="displayed" /><x:headerFooter /><x:tableParts count="0" /></x:worksheet>';

var sheetHyperlinksFront = '<x:hyperlinks>';
var sheetHyperlinksBack = '</x:hyperlinks>';
var hyperlinksCount = 0;

var sharedStringsFront = '<?xml version="1.0" encoding="UTF-8"?><x:sst xmlns:x="http://schemas.openxmlformats.org/spreadsheetml/2006/main" uniqueCount="$count" count="$count">';
var sharedStringsBack = '</x:sst>';
var shareStrings;

var sheetRelationshipsFront = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
    '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">';
    //'<Relationship TargetMode="External" Target="http://urbanapplication.org/DownloadAll/5233fb8094bfd08f35000018" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink" Id="rId1"/>' +
var sheetRelationshipsBack = '</Relationships>';

exports.executeAsync = function(config, callBack){
	return process.nextTick(function(){
		var r = exports.execute(config);		
		callBack(r);
	});
}

exports.execute = function(config){
	var cols = config.cols,
		data = config.rows;

    //---added by Steven Chen to fix the hyperlink bug
    sheetHyperlinksBack = '</x:hyperlinks>';
    hyperlinksCount = 0;
    sheetRelationshipsBack = '</Relationships>';
    //----------------------

	var xlsx = new JSZip(templateXLSX, { base64: true, checkCRC32: false }),
		sheet = xlsx.file("xl/worksheets/sheet.xml"),
        sheet_rels = xlsx.file("xl/worksheets/_rels/sheet.xml.rels"),
		sharedStringsXml = xlsx.file("xl/sharedStrings.xml"),
		rows = "",
		row ="";
	
	shareStrings = new Array();
	//first row for column caption
	row = ['<x:row r="1" spans="1:', cols.length , '">'].join('');
  var k;
	for (k=0; k < cols.length; k++)
	{
		row = [row,  addStringCol(getColumnLetter(k+1)+1, cols[k].caption)].join('');
	}
	row = [row , '</x:row>'].join('');
	rows = [rows , row].join('');	
	
	//fill in data
  var i, j, r, cellData;
	for (i=0;i<data.length;i++)
	{
		r = data[i], currRow = i+2;
		row = ['<x:row r="',currRow,'" spans="1:', cols.length , '">'].join('');
		for (j=0; j<cols.length; j++)
		{
      cellData = r[j];
      if (typeof cols[j].beforeCellWrite === 'function')
        cellData = cols[j].beforeCellWrite(r, cellData);    
    
			switch(cols[j].type)
			{
				case 'number':
					row = [row, addNumberCol(getColumnLetter(j+1)+currRow, cellData)].join('');
					break;
				case 'date':
					row = [row, addDateCol(getColumnLetter(j+1)+currRow, cellData)].join('');
					break;
				case 'bool':
					row = [row, addBoolCol(getColumnLetter(j+1)+currRow, cellData)].join('');
					break;
                case 'hyperlink':
                    row = [row, addHyperlinkCol(getColumnLetter(j+1)+currRow, cellData)].join('');
                    break;
                default:
					row = [row, addStringCol(getColumnLetter(j+1)+currRow, cellData)].join('');
			}
		}
		row = [row, '</x:row>'].join('');
		rows = [rows , row].join('');
	}	
	xlsx.remove(sheet.name);

    // Clear sheet_rels template
    xlsx.remove(sheet_rels.name);
    // Append actual sheet_rels data
    if (hyperlinksCount > 0) {
        xlsx.file(sheet_rels.name, sheetRelationshipsFront + sheetRelationshipsBack);
        xlsx.file(sheet.name, sheetFront + rows + sheetBack + sheetHyperlinksFront + sheetHyperlinksBack + workSheetBack);
    } else {
        xlsx.file(sheet.name, sheetFront + rows + sheetBack + workSheetBack);
    }

	if (shareStrings.length >0)
	{
		xlsx.remove(sharedStringsXml.name);
		sharedStringsFront = sharedStringsFront.replace(/\$count/g, shareStrings.length);
		xlsx.file(sharedStringsXml.name, sharedStringsFront + convertShareStrings() + sharedStringsBack);
	}
	
	var r = xlsx.generate({ base64: false, compression: "DEFLATE" });
	delete xlsx;
	delete shareStrings;
	return r;
}

var addNumberCol = function(cellRef, value){
	if (value===null)
		return "";
	else
		return ['<x:c r="',cellRef,'" s="0" t="n"><x:v>',value,'</x:v></x:c>'].join('');
};
var addDateCol = function(cellRef, value){
	if (value===null)
		return "";
	else
		return ['<x:c r="',cellRef,'" s="1" t="n"><x:v>',value,'</x:v></x:c>'].join('');
};
var addBoolCol = function(cellRef, value){
	if (value===null)
		return "";
	if (value){
	  value = 1
	} else
	  value = 0;
	return ['<x:c r="',cellRef,'" s="0" t="b"><x:v>',value,'</x:v></x:c>'].join('');
};
var addStringCol = function(cellRef, value){
	if (value===null)
		return "";
  if (typeof value ==='string'){
    value = value.replace(/&/g, "&amp;").replace(/'/g, "&apos;").replace(/>/g, "&gt;").replace(/</g, "&lt;");
  }
  
	if (shareStrings.indexOf(value) < 0){
		shareStrings.push(value);
	}
	return ['<x:c r="',cellRef,'" s="0" t="s"><x:v>',shareStrings.indexOf(value),'</x:v></x:c>'].join('');
};

var addHyperlinkCol = function(cellRef, value){
    if (value===null)
        return "";
    if (typeof value ==='object'){
        //var href = value.href;
        //modified by Steven Chen to fix the issue of the hyperlink with spaces
        var hrefstr=value.href;
        var n=hrefstr.indexOf("://")+3;
        var components=hrefstr.substring(n).split('/');
        for(var i=0;i<components.length;i++){
            components[i]=encodeURIComponent(components[i]).replace(/%23/g,"#").replace(/%3A/g,":");
        }
        var href=hrefstr.substring(0,n)+components.join('/');
        //---------------------------------------------------------------------

        value.text = value.text.replace(/&/g, "&amp;").replace(/'/g, "&apos;").replace(/>/g, "&gt;").replace(/</g, "&lt;");

        // Add to sheet hyperlinks section and Relationships file section
        //'<x:hyperlinks>' +
        //'<x:hyperlink ref="A1" r:id="rId1"/>' +
        //'</x:hyperlinks>' +
        //sheetHyperlinksBack = '</x:hyperlinks>';
        //var sheetRelationshipsFront = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        //    '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">';
        //'<Relationship TargetMode="External" Target="http://urbanapplication.org/DownloadAll/5233fb8094bfd08f35000018" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink" Id="rId1"/>' +
        //var sheetRelationshipsBack = '</Relationships>';
        hyperlinksCount++
        sheetRelationshipsBack = '<Relationship TargetMode="External" Target="'+href+'" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink" Id="rId'+hyperlinksCount+'"/>' + sheetRelationshipsBack;
        sheetHyperlinksBack = '<x:hyperlink ref="'+cellRef+'" r:id="rId'+hyperlinksCount+'"/>' + sheetHyperlinksBack;
    }
//    if (typeof value ==='string'){
//        value = value.replace(/&/g, "&amp;").replace(/'/g, "&apos;").replace(/>/g, "&gt;").replace(/</g, "&lt;");
//    }

    if (shareStrings.indexOf(value.text) < 0){
        shareStrings.push(value.text);
    }
    return ['<x:c r="',cellRef,'" s="2" t="s"><x:v>',shareStrings.indexOf(value.text),'</x:v></x:c>'].join('');
};

var convertShareStrings = function(){
	var r = "", i;
	for (i=0;i<shareStrings.length;i++)
	{	
		r = [r , "<x:si><x:t>",shareStrings[i],"</x:t></x:si>"].join('');
	}
	return r;
};

var getColumnLetter = function(col){
  if (col <= 0)
	throw "col must be more than 0";
  var array = new Array();
  while (col > 0)
  {
	var remainder = col % 26;
	col /= 26;
	col = Math.floor(col);
	if(remainder ===0)
	{
		remainder = 26;
		col--;
	}
	array.push(64 + remainder);
  }
  return String.fromCharCode.apply(null, array.reverse());
}