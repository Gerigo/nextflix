import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadImagesService {

  constructor(private http: HttpClient) { }

  public christmas = [
    {
      "path": "https://cdn.pixabay.com/photo/2017/07/28/00/57/bank-2547356_960_720.jpg"
    },
     {
      "path": "https://cdn.pixabay.com/photo/2017/11/14/00/57/christmas-2947257_960_720.jpg"
    },
    {
      "path": "https://cdn.pixabay.com/photo/2020/12/25/11/19/candle-5859094_960_720.jpg"
    },
    {
      "path": "https://cdn.pixabay.com/photo/2016/12/04/21/22/snowman-1882635_960_720.jpg"
    },
    {
      "path": "https://cdn.pixabay.com/photo/2017/08/06/18/05/people-2594745_960_720.jpg"
    }
  ]

  public children = [
    {
      "path": "https://cdn.pixabay.com/photo/2018/07/20/15/43/fishing-3550959_960_720.png"
    },
     {
      "path": "https://cdn.pixabay.com/photo/2017/07/22/08/51/beaver-2528127_960_720.jpg"
    },
    {
      "path": "https://cdn.pixabay.com/photo/2020/05/26/08/31/kids-5222135_960_720.jpg"
    },
    {
      "path": "https://cdn.pixabay.com/photo/2020/05/16/00/25/wallpapers-5175518_960_720.png"
    },
    {
      "path": "https://cdn.pixabay.com/photo/2019/04/17/09/11/desert-4133696_960_720.jpg"
    }
  ]


  public documentary = [
    {
      "path": "https://cdn.pixabay.com/photo/2021/11/15/05/52/red-fox-6796430_960_720.jpg"
    },
     {
      "path": "https://cdn.pixabay.com/photo/2018/08/12/16/59/parrot-3601194_960_720.jpg"
    },
    {
      "path": "https://cdn.pixabay.com/photo/2017/05/31/18/38/sea-2361247_960_720.jpg"
    },
    {
      "path": "https://cdn.pixabay.com/photo/2013/11/01/11/13/dolphin-203875_960_720.jpg"
    },
    {
      "path": "https://cdn.pixabay.com/photo/2017/10/20/10/58/elephant-2870777_960_720.jpg"
    }
  ]

  public action = [
    {
      "path": "https://cdn.pixabay.com/photo/2019/04/14/17/18/gun-4127187_960_720.jpg"
    },
     {
      "path": "https://cdn.pixabay.com/photo/2016/11/19/09/45/man-1838330_960_720.jpg"
    },
    {
      "path": "https://cdn.pixabay.com/photo/2016/11/19/16/44/woman-1840256_960_720.jpg"
    },
    {
      "path": "https://cdn.pixabay.com/photo/2021/02/16/10/59/woman-6020720_960_720.jpg"
    },
    {
      "path": "https://cdn.pixabay.com/photo/2014/07/04/19/15/man-384178_960_720.jpg"
    }
  ]

  public sadness = [
    {
      "path": "https://cdn.pixabay.com/photo/2018/05/22/14/00/girl-3421489_960_720.jpg"
    },
     {
      "path": "https://cdn.pixabay.com/photo/2017/01/06/19/49/woman-1958723_960_720.jpg"
    },
    {
      "path": "https://cdn.pixabay.com/photo/2016/10/06/05/19/couple-1718244_960_720.jpg"
    },
    {
      "path": "https://cdn.pixabay.com/photo/2012/03/04/01/01/father-22194_960_720.jpg"
    },
    {
      "path": "https://cdn.pixabay.com/photo/2017/08/06/23/22/people-2597454_960_720.jpg"
    }
  ]

  getChristmasImages(): any {
    return this.christmas;
  }

  getChildrenImages(): any {
    return this.children;
  }

  getAnimalsImages(): any {
    return this.documentary;
  }

  getActionsImages(): any {
    return this.action;
  }

  getSadnessImages(): any {
    return this.sadness;
  }



}
