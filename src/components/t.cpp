#include<bits/stdc++.h>
#include <ext/pb_ds/assoc_container.hpp>
using namespace __gnu_pbds;
using namespace std;

#define int             long long int
#define ff              first
#define ss              second
#define pb              push_back
#define mp              make_pair
#define pii             pair<int,int>
#define vi              vector<int>
#define mii             map<int,int>
#define pqb             priority_queue<int>
#define pqs             priority_queue<int,vi,greater<int> >
#define setbits(x)      __builtin_popcountll(x)
#define zrobits(x)      __builtin_ctzll(x)
#define mod             1000000007
#define inf             1e18
#define ps(x,y)         fixed<<setprecision(y)<<x
#define mk(arr,n,type)  type *arr=new type[n];
#define w(x)            int x; cin>>x; while(x--)
#define FIO             ios_base::sync_with_stdio(0); cin.tie(0); cout.tie(0)
#define forn(i,n)      for(int i=0;i<n;++i)
#define fore(i, l, r)   for(int i = l; i <= r; ++i)
#define all(v)          v.begin(), v.end()

mt19937                 rng(chrono::steady_clock::now().time_since_epoch().count());
void SieveOfEratosthenes(int n)
{
    vector<bool> sieve(n+1, true);
    sieve[0] = sieve[1] = false;
    for(int i=2;i*i<=n;i++){
        if (sieve[i]){
             // Update all multiples of i greater than or equal to its square which are multiple of i. Nos less than  p^2 are already been marked.
            for(int j=i*i;j<=n;j+=i){
                sieve[j] = false;
            }
        }
    }
}
int gcd(int a, int b)
{
    if (b == 0)
        return a;
    return gcd(b, a % b);
}
int lcm(int a, int b) { return (a / gcd(a, b) * b); }
bool isPowerOfTwo(int n)
{
    if (n == 0)
        return false;
    return (ceil(log2(n)) == floor(log2(n)));
}

bool compare(pair<int,int>& p1, pair<int,int>& p2){
    if (p1.first == p2.first)
    return p1.second < p2.second;
    return p1.first < p2.first;
}

typedef tree<int, null_type, less<int>, rb_tree_tag, tree_order_statistics_node_update> pbds;

bool isPalindrome(string s){
    int n = s.length();
    for(int i=0;i<n/2;i++){
        if (s[i]!=s[n-1-i]){
            return false;
        }
    }
    
    return true;
}

void printGraph(vector<vector<int> >& adj, int n){
    for(int i=1;i<=n;i++){
        cout<<i<<" ";
        int size = adj[i].size();
        for(int j=0;j<size;j++){
            cout<<adj[i][j]<<" ";
        }
        cout<<endl;
    }
}

bool checkUnsetBit(int n, int i){
    if ((n&(1<<i)) != 0){
        return false;
    }else{
        return true;
    }
}

int32_t main()
{
	FIO;
	// w(t){
    //   int n,k; cin>>n>>k;
    //   int a[n];
    //   forn(i,n)cin>>a[i];
    //   map<int,stack<int> > mp;
    //   vector<pair<int,int> > res;
    //   forn(i,n){
    //       mp[a[i]%k].push(a[i]);
    //   }
    //   while(mp[0].size() > 1){
    //       int t1=mp[0].top(); mp[0].pop();
    //       int t2 = mp[0].top(); mp[0].pop();
    //       res.push_back({t1,t2});
    //   }
    //   for(int i=1;i<=k/2;i++){
    //       if (i==k-i){
    //           while(mp[i].size()>1){
    //                 int t1=mp[i].top(); mp[i].pop();
    //                 int t2 = mp[i].top(); mp[i].pop();
    //                 res.push_back({t1,t2});
    //           }
    //           continue;
    //       }
    //     while(mp[i].size()>0 and mp[k-i].size()>0){
    //       int t1=mp[i].top(); mp[i].pop();
    //       int t2 = mp[k-i].top(); mp[k-i].pop();
    //       res.push_back({t1,t2});
    //     }
    //   }

    //  vi t;
    //   for(auto it=mp.begin();it!=mp.end();it++){
    //       while(it->second.size() > 0) {t.pb(it->second.top()); it->second.pop();}
    //   }
    //   for(int i=0;i<t.size();i+=2){
    //       res.pb({t[i], t[i+1]});
    //   }
    //   int ans=0;
    //   for(int i=0;i<res.size();i++){
    //       ans+=(res[i].first+res[i].second)/k;
    //   }

    //   cout<<ans<<endl;


	// }
    

    w(t){
        int n; cin>>n; 
        string s; cin>>s;
        int a[n];
        forn(i,n) cin>>a[i];
        vector<vector<int> > adj;
        forn(i,n){
            adj[a[i]-1].pb(i);  // a[i]-1 -> i
        }
        vector<bool> vis(n,false);
        int ans=1;
        for(int i=0;i<n;i++){
            if (!vis[i]){
                vis[i]=true;
                char ch=s[i];
                bool founddiffChar = false;
                int c=1,st=adj[i];
                while(i!=st){
                    vis[st]=true;
                    if (s[st] != ch)founddiffChar = true;
                    st = adj[st]; c++;
                }
                if (foundDiffchar){
                    ans*=c;
                }
            }
        }

        cout<<ans<<endl;
        

    }
}
