package pl.edu.uwm.wmii.web.rest.dto.base;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * Created by wojciech.baczewski on 2016-03-29.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BaseDTO implements Serializable {
    private Long id;
}
