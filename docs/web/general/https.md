---
title: HTTPS
---
## 问题
http 协议存在一些安全性问题
* 通信使用明文(不加密) ,内容可能会被窃听
* 不验证通信方的身份,因此有可能遭遇伪装
* 无法证明报文的完整性,所以有可能已遭篡改

### 解决办法
#### 内容的加密

将通信的内容本身进行加密。由于 HTTP 协议中没有加密机制，那么就对 HTTP 协议传输的内容本身加密。即把 HTTP 报文里所含的内容进行加密处理。 在这种情况下，客户端需要对 HTTP 报文进行加密处理后再发送请求。  
HTTP 协议的实现本身非常简单,不论是谁发送过来的请求都会返回响应，因此会存在以下各种隐患。
* 无法确定通信方，服务器、客户端都有可能由中间人冒充，也无法确认通信对方的访问权限。
* 无法确认报文完整性，通常使用 MD5 / SHA-1 等散列值校验的方法，以及用来确认文件的数字签名方法来进行完整性校验。但如果 PGP 和 MD5 本身被改写，用户是没有办法意识到的，故保证确认结果正确。

#### 通信的加密
HTTP 协议中没有加密机制，但可以通过和以下两种协议的组合使用，加密 HTTP 的通信内容。 用 SSL 建立安全通信线路之后，就可以在这条线路上进行 HTTP 通信了。与 SSL 组合使用的 HTTP 被称为 HTTPS(HTTP Secure,超文本传输安全协议)或 HTTP over SSL。
> SSL：Secure Socket Layer，安全套接层  
> TLS：Transport Layer Security，安全传输层协议

* 使用 SSL 则可以确定通信方。SSL 不仅提供加密处理,而且还使用了一种被称为证书的手段,可用于确定方。  
* SSL 提供认证和加密处理及摘要功能，用以确保内容完整性。

## 定义
> HTTPS = HTTP+ 加密 + 认证 + 完整性保护

用 SSL 建立安全通信线路之后,就可以在这条线路上进行 HTTP 通信了。与 SSL 组合使用的 HTTP 被称为 HTTPS(HTTP Secure,超文本传输安全协议)或 HTTP over SSL。  

HTTPS 使 用 SSL(Secure Socket Layer) 和 TLS(Transport Layer Security)这两个协议。TSL 是以 SSL 为原型开发的协议,有时会统一称该协议为 SSL。当前主流的版本是 SSL3.0 和 TLS1.0。 

## 密钥
近代的加密方法中，加密算法是公开的，密钥是保密的。如果密钥被攻击者获得，那加密也就失去了意义。  

SSL 采用一种叫做公开密钥加密(Public-key cryptography)的加密处理方式：发送密文的一方使用对方的公开密钥进行加密处理，对方收到被加密的信息后，再使用自己的私有密钥进行解密。

公开密钥加密与共享密钥加密相比,其处理速度要慢。所以 HTTPS 采用共享二者并用的混合加密机制。使用公开密钥加密方式交换密钥，使用共享密钥加密方式，建立通信，交换报文。


## 证书
公开密钥加密的问题，是无法证明公开密钥本身就是货真价实的公开密钥。解决方案是使用由数字证书认证机构(CA,Certificate Authority)和其相关机关颁发的公开密钥证书。  

1. Server 向 CA 提出公开密钥的申请。CA 认证后，会对已申请的公开密钥做数字签名，然后分配这个已签名的公开密钥，并将该公开密钥放入公钥证书（数字证书/证书）后绑定在一起。  
1. Server 将由 CA 颁发的证书发送给 Client，以进行公开密钥加密方式通信。  
1. Client 使用 CA 的公开密钥，对证书上的数字签名进行验证，由此确认Server 的公开密钥是否值得信赖。
1. 此处认证机关的公开密钥必须安全地转交给客户端。多数浏览器发布版本时，会事先在内部植入常用 CA 的公开密钥。


### 进阶证书
有几种特殊用途的证书：
* 其中一种，可确认对方服务器背后运营的企业是否真实存在。拥有该特性的证书就是 EV SSL 证书(Extended Validation SSL Certificate) 。 
* 安全性极高的认证机构可颁发客户端证书但，仅用于特殊用途的业务，比如那些可支撑客户端证书支出费用的业务。例如，银行的网上银行就采用了客户端证书。
* 独立构建的认证机构叫做自认证机构，由自认证机构颁发的“无用”证书也被戏称为自签名证书。

## Performance

SSL 的慢分两种。
* 一种是指通信慢。
* 另一种是指由于大量消耗 CPU 及内存等资源,导致处理速度变慢。

我们会使用SSL 加速器这种(专用服务器)硬件来改善该问题。该硬件为 SSL 通信专用硬件，相对软件来讲，能够提高数倍 SSL 的计算速度。