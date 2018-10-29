## Routing - PART3

### A. navigate Programatically

1. Inject router Service
2. invoke this.routerSrv.navigate(url)
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp11.jpg)

> UnliKe RouterLink, `this.routerSrv.navigate(url)` does not know about current path and always take root-context as current path.

3.  Set relative path for navigate(arg1,arg2) 
- set it arg2 which is js object : { redlativeTo : this.ActivatedRouteSrv}
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp12.jpg)

***
### B. Pass/fetch : path parameter, queryParam and fragment Programatically
1. ![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp23.jpg)
note: above relativeTo property is not set in 2nd arg.

2. Fetch parameter, queryParam and fragment
> Case-1 : if url mapped to anothor Component

```
- this.ActivatedRouteSrv.snapshot.params['p1']
- this.ActivatedRouteSrv.snapshot.queryParams['qp1']
- this.ActivatedRouteSrv.snapshot.fragments['f1']
```
> Case-2 : if url mapped to same Component but with different values.

- Subscribe to below observable in corresponding component.
```
- this.ActivatedRouteSrv.params.subscribe()
- this.ActivatedRouteSrv.queryParams.subscribe()
- this.ActivatedRouteSrv.fragment.subscribe()
```
***



